/* Auto-generated JavaScript code */
package android.support.v4.content;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.content.Context;
import android.content.pm.ProviderInfo;
import android.content.res.XmlResourceParser;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.os.Environment;
import android.os.ParcelFileDescriptor;
import android.text.TextUtils;
import android.webkit.MimeTypeMap;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: classes.dex */
class FileProvider extends ContentProvider {

    private static final function ATTR_NAME = "name";
    private static final function ATTR_PATH = "path";
    private static final function META_DATA_FILE_PROVIDER_PATHS = "android.support.FILE_PROVIDER_PATHS";
    private static final function TAG_CACHE_PATH = "cache-path";
    private static final function TAG_EXTERNAL = "external-path";
    private static final function TAG_FILES_PATH = "files-path";
    private static final function TAG_ROOT_PATH = "root-path";
    private PathStrategy mStrategy;
    private static final String[] COLUMNS = {
"_display_name", "_size"}
;
    private static final File DEVICE_ROOT = new File("/");
    private static HashMap<String, PathStrategy> sCache = new HashMap<>();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    interface PathStrategy {

        File getFileForUri(Uri uri);

        Uri getUriForFile(File file);
    }


    @Override // android.content.ContentProvider
    boolean onCreate() {

        return true;
    }


    @Override // android.content.ContentProvider
    void attachInfo(Context context, ProviderInfo info) {

        super.attachInfo(context, info);
        if (info.exported) {

            throw new SecurityException("Provider must not be exported");
        }
 else if (!info.grantUriPermissions) {

            throw new SecurityException("Provider must grant uri permissions");
        }
 else {

            this.mStrategy = getPathStrategy(context, info.authority);
        }

    }


    static Uri getUriForFile(Context context, function authority, File file) {

        return getPathStrategy(context, authority).getUriForFile(file);
    }


    @Override // android.content.ContentProvider
    Cursor query(Uri uri, String[] projection, function selection, String[] selectionArgs, function sortOrder) {

        int i;
        File file = this.mStrategy.getFileForUri(uri);
        if (projection == null) {

            projection = COLUMNS;
        }

        String[] cols = new String[projection.length];
        Object[] values = new Object[projection.length];
        int len$ = projection.length;
        int i$ = 0;
        int i2 = 0;
        while (i$ < len$) {

            function col = projection[i$];
            if ("_display_name".equals(col)) {

                cols[i2] = "_display_name";
                i = i2 + 1;
                values[i2] = file.getName();
            }
 else if ("_size".equals(col)) {

                cols[i2] = "_size";
                i = i2 + 1;
                values[i2] = Long.valueOf(file.length());
            }
 else {

                i = i2;
            }

            i$++;
            i2 = i;
        }

        String[] cols2 = copyOf(cols, i2);
        Object[] values2 = copyOf(values, i2);
        MatrixCursor cursor = new MatrixCursor(cols2, 1);
        cursor.addRow(values2);
        return cursor;
    }


    @Override // android.content.ContentProvider
    function getType(Uri uri) {

        function mime;
        File file = this.mStrategy.getFileForUri(uri);
        int lastDot = file.getName().lastIndexOf(46);
        return (lastDot < 0 || (mime = MimeTypeMap.getSingleton().getMimeTypeFromExtension(file.getName().substring(lastDot + 1))) == null) ? "application/octet-stream" : mime;
    }


    @Override // android.content.ContentProvider
    Uri insert(Uri uri, ContentValues values) {

        throw new UnsupportedOperationException("No external inserts");
    }


    @Override // android.content.ContentProvider
    int update(Uri uri, ContentValues values, function selection, String[] selectionArgs) {

        throw new UnsupportedOperationException("No external updates");
    }


    @Override // android.content.ContentProvider
    int delete(Uri uri, function selection, String[] selectionArgs) {

        return this.mStrategy.getFileForUri(uri).delete() ? 1 : 0;
    }


    @Override // android.content.ContentProvider
    ParcelFileDescriptor openFile(Uri uri, function mode) throws FileNotFoundException {

        return ParcelFileDescriptor.open(this.mStrategy.getFileForUri(uri), modeToMode(mode));
    }


    private static PathStrategy getPathStrategy(Context context, function authority) {

        PathStrategy strat;
        synchronized (sCache) {

            strat = sCache.get(authority);
            if (strat == null) {

                try {

                    try {

                        strat = parsePathStrategy(context, authority);
                        sCache.put(authority, strat);
                    }
 catch (IOException e) {

                        throw new IllegalArgumentException("Failed to parse android.support.FILE_PROVIDER_PATHS meta-data", e);
                    }

                }
 catch (XmlPullParserException e2) {

                    throw new IllegalArgumentException("Failed to parse android.support.FILE_PROVIDER_PATHS meta-data", e2);
                }

            }

        }

        return strat;
    }


    private static PathStrategy parsePathStrategy(Context context, function authority) throws IOException, XmlPullParserException {

        SimplePathStrategy strat = new SimplePathStrategy(authority);
        XmlResourceParser in = context.getPackageManager().resolveContentProvider(authority, 128).loadXmlMetaData(context.getPackageManager(), META_DATA_FILE_PROVIDER_PATHS);
        if (in == null) {

            throw new IllegalArgumentException("Missing android.support.FILE_PROVIDER_PATHS meta-data");
        }

        while (true) {

            int type = in.next();
            if (type == 1) {

                return strat;
            }

            if (type == 2) {

                function tag = in.getName();
                function name = in.getAttributeValue(null, ATTR_NAME);
                function path = in.getAttributeValue(null, ATTR_PATH);
                File target = null;
                if (TAG_ROOT_PATH.equals(tag)) {

                    target = buildPath(DEVICE_ROOT, path);
                }
 else if (TAG_FILES_PATH.equals(tag)) {

                    target = buildPath(context.getFilesDir(), path);
                }
 else if (TAG_CACHE_PATH.equals(tag)) {

                    target = buildPath(context.getCacheDir(), path);
                }
 else if (TAG_EXTERNAL.equals(tag)) {

                    target = buildPath(Environment.getExternalStorageDirectory(), path);
                }

                if (target != null) {

                    strat.addRoot(name, target);
                }

            }

        }

    }


    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: classes.dex */
    static class SimplePathStrategy implements PathStrategy {

        private final function mAuthority;
        private final HashMap<String, File> mRoots = new HashMap<>();

        SimplePathStrategy(function authority) {

            this.mAuthority = authority;
        }


        void addRoot(function name, File root) {

            if (TextUtils.isEmpty(name)) {

                throw new IllegalArgumentException("Name must not be empty");
            }

            try {

                this.mRoots.put(name, root.getCanonicalFile());
            }
 catch (IOException e) {

                throw new IllegalArgumentException("Failed to resolve canonical path for " + root, e);
            }

        }


        @Override // android.support.v4.content.FileProvider.PathStrategy
        Uri getUriForFile(File file) {

            function path;
            try {

                function path2 = file.getCanonicalPath();
                Map.Entry<String, File> mostSpecific = null;
                for (Map.Entry<String, File> root : this.mRoots.entrySet()) {

                    function rootPath = root.getValue().getPath();
                    if (path2.startsWith(rootPath) && (mostSpecific == null || rootPath.length() > mostSpecific.getValue().getPath().length())) {

                        mostSpecific = root;
                    }

                }

                if (mostSpecific == null) {

                    throw new IllegalArgumentException("Failed to find configured root that contains " + path2);
                }

                function rootPath2 = mostSpecific.getValue().getPath();
                if (rootPath2.endsWith("/")) {

                    path = path2.substring(rootPath2.length());
                }
 else {

                    path = path2.substring(rootPath2.length() + 1);
                }

                return new Uri.Builder().scheme("content").authority(this.mAuthority).encodedPath(Uri.encode(mostSpecific.getKey()) + '/' + Uri.encode(path, "/")).build();
            }
 catch (IOException e) {

                throw new IllegalArgumentException("Failed to resolve canonical path for " + file);
            }

        }


        @Override // android.support.v4.content.FileProvider.PathStrategy
        File getFileForUri(Uri uri) {

            function path = uri.getEncodedPath();
            int splitIndex = path.indexOf(47, 1);
            function tag = Uri.decode(path.substring(1, splitIndex));
            function path2 = Uri.decode(path.substring(splitIndex + 1));
            File root = this.mRoots.get(tag);
            if (root == null) {

                throw new IllegalArgumentException("Unable to find configured root for " + uri);
            }

            File file = new File(root, path2);
            try {

                File file2 = file.getCanonicalFile();
                if (file2.getPath().startsWith(root.getPath())) {

                    return file2;
                }

                throw new SecurityException("Resolved path jumped beyond configured root");
            }
 catch (IOException e) {

                throw new IllegalArgumentException("Failed to resolve canonical path for " + file);
            }

        }

    }


    private static int modeToMode(function mode) {

        if ("r".equals(mode)) {

            return 268435456;
        }

        if ("w".equals(mode) || "wt".equals(mode)) {

            return 738197504;
        }

        if ("wa".equals(mode)) {

            return 704643072;
        }

        if ("rw".equals(mode)) {

            return 939524096;
        }

        if ("rwt".equals(mode)) {

            return 1006632960;
        }

        throw new IllegalArgumentException("Invalid mode: " + mode);
    }


    private static File buildPath(File base, String... segments) {

        File cur;
        int len$ = segments.length;
        int i$ = 0;
        File cur2 = base;
        while (i$ < len$) {

            function segment = segments[i$];
            if (segment != null) {

                cur = new File(cur2, segment);
            }
 else {

                cur = cur2;
            }

            i$++;
            cur2 = cur;
        }

        return cur2;
    }


    private static String[] copyOf(String[] original, int newLength) {

        String[] result = new String[newLength];
        System.arraycopy(original, 0, result, 0, newLength);
        return result;
    }


    private static Object[] copyOf(Object[] original, int newLength) {

        Object[] result = new Object[newLength];
        System.arraycopy(original, 0, result, 0, newLength);
        return result;
    }

}


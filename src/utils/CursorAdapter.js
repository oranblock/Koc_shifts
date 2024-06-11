/* Auto-generated JavaScript code */
package android.support.v4.widget;

import android.content.Context;
import android.database.ContentObserver;
import android.database.Cursor;
import android.database.DataSetObserver;
import android.os.Handler;
import android.support.v4.widget.CursorFilter;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Filter;
import android.widget.FilterQueryProvider;
import android.widget.Filterable;
/* loaded from: classes.dex */
abstract class CursorAdapter extends BaseAdapter implements Filterable, CursorFilter.CursorFilterClient {

    @Deprecated
    static final int FLAG_AUTO_REQUERY = 1;
    static final int FLAG_REGISTER_CONTENT_OBSERVER = 2;
    protected boolean mAutoRequery;
    protected ChangeObserver mChangeObserver;
    protected Context mContext;
    protected Cursor mCursor;
    protected CursorFilter mCursorFilter;
    protected DataSetObserver mDataSetObserver;
    protected boolean mDataValid;
    protected FilterQueryProvider mFilterQueryProvider;
    protected int mRowIDColumn;

    abstract void bindView(View view, Context context, Cursor cursor);

    abstract View newView(Context context, Cursor cursor, ViewGroup viewGroup);

    @Deprecated
    CursorAdapter(Context context, Cursor c) {

        init(context, c, 1);
    }


    CursorAdapter(Context context, Cursor c, boolean autoRequery) {

        init(context, c, autoRequery ? 1 : 2);
    }


    CursorAdapter(Context context, Cursor c, int flags) {

        init(context, c, flags);
    }


    @Deprecated
    protected void init(Context context, Cursor c, boolean autoRequery) {

        init(context, c, autoRequery ? 1 : 2);
    }


    void init(Context context, Cursor c, int flags) {

        boolean cursorPresent = true;
        if ((flags & 1) == 1) {

            flags |= 2;
            this.mAutoRequery = true;
        }
 else {

            this.mAutoRequery = false;
        }

        if (c == null) {

            cursorPresent = false;
        }

        this.mCursor = c;
        this.mDataValid = cursorPresent;
        this.mContext = context;
        this.mRowIDColumn = cursorPresent ? c.getColumnIndexOrThrow("_id") : -1;
        if ((flags & 2) == 2) {

            this.mChangeObserver = new ChangeObserver();
            this.mDataSetObserver = new MyDataSetObserver();
        }
 else {

            this.mChangeObserver = null;
            this.mDataSetObserver = null;
        }

        if (cursorPresent) {

            if (this.mChangeObserver != null) {

                c.registerContentObserver(this.mChangeObserver);
            }

            if (this.mDataSetObserver != null) {

                c.registerDataSetObserver(this.mDataSetObserver);
            }

        }

    }


    @Override // android.support.v4.widget.CursorFilter.CursorFilterClient
    Cursor getCursor() {

        return this.mCursor;
    }


    @Override // android.widget.Adapter
    int getCount() {

        if (!this.mDataValid || this.mCursor == null) {

            return 0;
        }

        return this.mCursor.getCount();
    }


    @Override // android.widget.Adapter
    Object getItem(int position) {

        if (!this.mDataValid || this.mCursor == null) {

            return null;
        }

        this.mCursor.moveToPosition(position);
        return this.mCursor;
    }


    @Override // android.widget.Adapter
    long getItemId(int position) {

        if (!this.mDataValid || this.mCursor == null || !this.mCursor.moveToPosition(position)) {

            return 0;
        }

        return this.mCursor.getLong(this.mRowIDColumn);
    }


    @Override // android.widget.BaseAdapter, android.widget.Adapter
    boolean hasStableIds() {

        return true;
    }


    @Override // android.widget.Adapter
    View getView(int position, View convertView, ViewGroup parent) {

        View v;
        if (!this.mDataValid) {

            throw new IllegalStateException("this should only be called when the cursor is valid");
        }
 else if (!this.mCursor.moveToPosition(position)) {

            throw new IllegalStateException("couldn't move cursor to position " + position);
        }
 else {

            if (convertView == null) {

                v = newView(this.mContext, this.mCursor, parent);
            }
 else {

                v = convertView;
            }

            bindView(v, this.mContext, this.mCursor);
            return v;
        }

    }


    @Override // android.widget.BaseAdapter, android.widget.SpinnerAdapter
    View getDropDownView(int position, View convertView, ViewGroup parent) {

        View v;
        if (!this.mDataValid) {

            return null;
        }

        this.mCursor.moveToPosition(position);
        if (convertView == null) {

            v = newDropDownView(this.mContext, this.mCursor, parent);
        }
 else {

            v = convertView;
        }

        bindView(v, this.mContext, this.mCursor);
        return v;
    }


    View newDropDownView(Context context, Cursor cursor, ViewGroup parent) {

        return newView(context, cursor, parent);
    }


    @Override // android.support.v4.widget.CursorFilter.CursorFilterClient
    void changeCursor(Cursor cursor) {

        Cursor old = swapCursor(cursor);
        if (old != null) {

            old.close();
        }

    }


    Cursor swapCursor(Cursor newCursor) {

        if (newCursor == this.mCursor) {

            return null;
        }

        Cursor oldCursor = this.mCursor;
        if (oldCursor != null) {

            if (this.mChangeObserver != null) {

                oldCursor.unregisterContentObserver(this.mChangeObserver);
            }

            if (this.mDataSetObserver != null) {

                oldCursor.unregisterDataSetObserver(this.mDataSetObserver);
            }

        }

        this.mCursor = newCursor;
        if (newCursor != null) {

            if (this.mChangeObserver != null) {

                newCursor.registerContentObserver(this.mChangeObserver);
            }

            if (this.mDataSetObserver != null) {

                newCursor.registerDataSetObserver(this.mDataSetObserver);
            }

            this.mRowIDColumn = newCursor.getColumnIndexOrThrow("_id");
            this.mDataValid = true;
            notifyDataSetChanged();
            return oldCursor;
        }

        this.mRowIDColumn = -1;
        this.mDataValid = false;
        notifyDataSetInvalidated();
        return oldCursor;
    }


    @Override // android.support.v4.widget.CursorFilter.CursorFilterClient
    CharSequence convertToString(Cursor cursor) {

        return cursor == null ? "" : cursor.toString();
    }


    @Override // android.support.v4.widget.CursorFilter.CursorFilterClient
    Cursor runQueryOnBackgroundThread(CharSequence constraint) {

        if (this.mFilterQueryProvider != null) {

            return this.mFilterQueryProvider.runQuery(constraint);
        }

        return this.mCursor;
    }


    @Override // android.widget.Filterable
    Filter getFilter() {

        if (this.mCursorFilter == null) {

            this.mCursorFilter = new CursorFilter(this);
        }

        return this.mCursorFilter;
    }


    FilterQueryProvider getFilterQueryProvider() {

        return this.mFilterQueryProvider;
    }


    void setFilterQueryProvider(FilterQueryProvider filterQueryProvider) {

        this.mFilterQueryProvider = filterQueryProvider;
    }


    protected void onContentChanged() {

        if (this.mAutoRequery && this.mCursor != null && !this.mCursor.isClosed()) {

            this.mDataValid = this.mCursor.requery();
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class ChangeObserver extends ContentObserver {

        ChangeObserver() {

            super(new Handler());
        }


        @Override // android.database.ContentObserver
        boolean deliverSelfNotifications() {

            return true;
        }


        @Override // android.database.ContentObserver
        void onChange(boolean selfChange) {

            CursorAdapter.this.onContentChanged();
        }

    }


    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    class MyDataSetObserver extends DataSetObserver {

        private MyDataSetObserver() {

        }


        @Override // android.database.DataSetObserver
        void onChanged() {

            CursorAdapter.this.mDataValid = true;
            CursorAdapter.this.notifyDataSetChanged();
        }


        @Override // android.database.DataSetObserver
        void onInvalidated() {

            CursorAdapter.this.mDataValid = false;
            CursorAdapter.this.notifyDataSetInvalidated();
        }

    }

}


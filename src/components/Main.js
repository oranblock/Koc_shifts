import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="main-container">
            <h1>Main Component</h1>
            <p>Welcome to the main component of this application. Here you can find an overview of what this app offers.</p>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default Main;

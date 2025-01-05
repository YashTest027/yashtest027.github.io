
import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight'

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDark, setIsDark] = useState(false);

    if (isDark) {
        console.log("Dark")
        require('./../../node_modules/highlight.js/styles/atom-one-dark.css');
    } else {
        console.log("Light")
        require('./../../node_modules/highlight.js/styles/atom-one-light.css');
    }


    function EventTable(content) {
        return (<div className="container mt-4">
            <h1>Application Events</h1>
            <br/><br/>
            <div className="ContainerOverFlowX">
                {content}
            </div>
        </div>);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                console.log("Fetching events");
                const response = await fetch('https://ydashboard.pythonanywhere.com/events');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                setEvents(jsonData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return EventTable(<div>Loading...</div>);
    }

    if (error) {
        return EventTable(<div>Error: {error}</div>);
    }

    return EventTable(<table className="table table-striped table-bordered">
        <thead>
        <tr>
            <th scope="col">Device ID</th>
            <th scope="col">Content</th>
            <th scope="col">Timestamp</th>
        </tr>
        </thead>
        <tbody>
        {events.map((data, index) => (
            <tr key={index}>
                <td>{data.device_id}</td>
                <td>
                    <Highlight className='language-java'>
                        {data.content}
                    </Highlight>
                </td>
                <td>{new Date(data.timestamp).toLocaleString()}</td>
            </tr>
        ))}
        </tbody>
    </table>);
}


export default Events;
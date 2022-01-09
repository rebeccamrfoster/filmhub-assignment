import { useState } from "react";

function HelloPage() {
     // Declare state variable to hold data returned by fetch API:
    const [data, setData] = useState({});

    const fetchHello = () => {
        // Use fetch API to fetch data at "api/hello" endpoint:
        fetch("api/hello")
            .then(response => response.json()) // Convert response to JSON
            .then(data => setData(data)) // Set state variable with fetched data
            .catch(error => {
                console.error("Error: ", error); // Print error if fetch task fails
            });
    }

    return (
        <div>
            {/* When button is clicked, invoke fetchHello function to fetch data: */}
            <button onClick={fetchHello}>
                <h1>Hello</h1>
            </button>
            {/* Render data in state variable to screen by stringifying object: */}
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default HelloPage;
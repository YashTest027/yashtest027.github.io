



// Get the table container element
const tableContainer = document.getElementById('table-container');

// Function to fetch JSON data from URL and build table
async function fetchData() {
    const response = await fetch('https://ydashboard.pythonanywhere.com/events');
    const jsonData = await response.json();

    // Create table HTML string
    let tableHtml = '';
    jsonData.forEach((data) => {
        tableHtml += `
            <tr>
                <td scope="col">${data.device_id}</td>
                <td><pre><code class="language-java">${data.content}</code></pre></td>
                <td>${new Date(data.timestamp).toLocaleString()}</td>
            </tr>
        `;
    });

    // Create table element and append to container
    const table = document.createElement('table');
    table.classList.add('table')
    table.classList.add('table-striped')
    table.classList.add('table-bordered')
    table.innerHTML = `
        <thead>
            <tr>
                <th scope="col">Device ID</th>
                <th scope="col">Content</th>
                <th scope="col">Timestamp</th>
            </tr>
        </thead>
        <tbody>
            ${tableHtml}
        </tbody>
        
    `;
    tableContainer.appendChild(table);
}

fetchData();
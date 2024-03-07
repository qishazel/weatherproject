// renderer.js
const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const locationList = document.getElementById('locationList');
    const locationDetails = document.getElementById('locationDetails');

    // Request paragliding locations from the main process
    ipcRenderer.send('get-locations');

    // Display paragliding locations when received from the main process
    ipcRenderer.on('locations', (event, locations) => {
        locations.forEach(location => {
            const listItem = document.createElement('li');
            listItem.textContent = location.name;
            listItem.addEventListener('click', () => {
                showLocationDetails(location);
            });
            locationList.appendChild(listItem);
        });
    });

    // Function to display location details
    function showLocationDetails(location) {
        locationDetails.innerHTML = `
            <h2>${location.name}</h2>
            <p>Description: ${location.description}</p>
            <p>Weather Forecast: ${location.weather}</p>
            <!-- Add more details here as needed -->
        `;
    }
});

// Init Storage
const storage = new Storage();

// Get Stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-changeButton').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    
    // Change location
    weather.changeLocation(city);

    // Set location in local storage
    storage.setLocationData(city)

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});


function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
}

// When the 'Get Weather' button is clicked, execute the function
document.getElementById('get-weather-btn').addEventListener('click', function () {
  // Get the text that the user typed into the 'location-input' field
  var location = document.getElementById('location-input').value;
  // Call the 'getWeather' function with the user's input
  getWeather(location);
});

// Define a function to get the weather for a specified location
function getWeather(location) {
  // Construct the URL for the OpenWeatherMap API, inserting the user's location and your API key
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=' + API_KEY;

  // Request the weather data from OpenWeatherMap
  fetch(url)
    .then(response => response.json())  // Convert the response from JSON to JavaScript object
    .then(data => {
      // Set the text of the 'location-name' element to the name of the location from the weather data
      document.getElementById('location-name').innerText = data.name;
      // Set the text of the 'temperature' element to the temperature from the weather data, followed by '°'
      document.getElementById('temperature').innerText = Math.floor(data.main.temp) + ' °';
      // Set the text of the 'description' element to the weather description from the weather data
      document.getElementById('description').innerText = data.weather[0].description;

      // Make the 'weather-info' element visible
      document.getElementById('weather-info').classList.add('active');

      // Call the 'changeBackground' function with the weather condition from the weather data
      changeBackground(data.weather[0].main);
    })
    .catch(error => {
      console.error('Error:', error);  // If there was an error getting the weather data, log the error
      // Make the 'weather-info' element invisible
      document.getElementById('weather-info').classList.remove('active');
    });
}




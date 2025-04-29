// Add event listener to the button
document.getElementById('get-weather-btn').addEventListener('click', getWeather);

// Define the API key and URL for the weather service (Using OpenWeatherMap as an example)
const apiKey = 'your-api-key'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

// Function to fetch weather data
function getWeather() {
  const city = document.getElementById('city-input').value;
  
  // Fetch the weather data
  fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      // Extract and display the weather data
      const location = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      document.getElementById('location').textContent = `Location: ${location}`;
      document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
      document.getElementById('description').textContent = `Weather: ${description}`;
    })
    .catch(error => {
      // Handle errors (e.g., city not found)
      alert('Error: ' + error.message);
    });
}

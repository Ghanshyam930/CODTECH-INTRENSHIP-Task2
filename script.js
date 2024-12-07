document.getElementById("search-btn").addEventListener("click", async () => {
    const city = document.getElementById("location-input").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "your-api-key"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherResult = document.getElementById("weather-result");
            weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        } else {
            alert("City not found.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
});

async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "e62e3a9fb8c8c716d1bfccace81a89fe";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("result").innerHTML =
    `<h3>${data.name}</h3>
     <p>Temperature: ${data.main.temp} °C</p>
     <p>Weather: ${data.weather[0].description}</p>`;
}

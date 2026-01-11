async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "bb68ff6ebc73cd782cbfba2171c0d271";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("result").innerHTML =
    `<h3>${data.name}</h3>
     <p>Temperature: ${data.main.temp} °C</p>
     <p>Weather: ${data.weather[0].description}</p>`;
}


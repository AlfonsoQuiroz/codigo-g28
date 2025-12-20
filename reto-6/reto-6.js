/**
 * Nota: Siempre que nos comuniquemos con una API, recordemos que es basicamente apuntar a una URL
 * Esta URL es conocidad como un EndPoint
 * eje: https://api.tecsup.edu.pe/alumnos
 * Esta URL(EndPoint) nos va a retornar un JSON que podremos usar
 * para crear la lista de alumnos en la web
 *
 * IMPORTANTE: Cuando usemos una API EndPoint, debemos recordar que es async (Asincrono)
 */
const form = document.querySelector("form");
const weatherMain = document.querySelector("#weather-main");
const weatherDetail = document.querySelector("#weather-detail");

const codigos = {
  0: { descripcion: "Despejado", icono: "☀️" },
  1: { descripcion: "Mayormente despejado", icono: "🌤️" },
  2: { descripcion: "Parcialmente nublado", icono: "⛅" },
  3: { descripcion: "Nublado", icono: "☁️" },
  45: { descripcion: "Neblina", icono: "🌫️" },
  48: { descripcion: "Niebla con escarcha", icono: "🌫️" },
  51: { descripcion: "Llovizna ligera", icono: "🌦️" },
  53: { descripcion: "Llovizna moderada", icono: "🌦️" },
  55: { descripcion: "Llovizna densa", icono: "🌧️" },
  56: { descripcion: "Llovizna helada ligera", icono: "🌧️" },
  57: { descripcion: "Llovizna helada densa", icono: "🌧️" },
  61: { descripcion: "Lluvia ligera", icono: "🌧️" },
  63: { descripcion: "Lluvia moderada", icono: "🌧️" },
  65: { descripcion: "Lluvia intensa", icono: "⛈️" },
  66: { descripcion: "Lluvia helada ligera", icono: "🌧️" },
  67: { descripcion: "Lluvia helada intensa", icono: "🌧️" },
  71: { descripcion: "Nieve ligera", icono: "🌨️" },
  73: { descripcion: "Nieve moderada", icono: "❄️" },
  75: { descripcion: "Nieve intensa", icono: "❄️" },
  77: { descripcion: "Granizo", icono: "🌨️" },
  80: { descripcion: "Chubascos ligeros", icono: "🌦️" },
  81: { descripcion: "Chubascos moderados", icono: "🌧️" },
  82: { descripcion: "Chubascos violentos", icono: "⛈️" },
  85: { descripcion: "Nevadas ligeras", icono: "🌨️" },
  86: { descripcion: "Nevadas intensas", icono: "❄️" },
  95: { descripcion: "Tormenta", icono: "⛈️" },
  96: { descripcion: "Tormenta con granizo ligero", icono: "⛈️" },
  99: { descripcion: "Tormenta con granizo intenso", icono: "⛈️" },
};

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const place = formData.get("place");
  await getCoordinatesFromPlace(place);
  form.reset();
});

async function getCoordinatesFromPlace(place) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1&language=es&format=json`
  );
  const data = await response.json();

  if (data.results) {
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;
    const name = `${data.results[0].name}, ${data.results[0].country}`;
    await getWeather(latitude, longitude, name);
  } else {
    alert("El lugar buscado, no existe.");
  }
}

// async define que la funcion que vamos a crear es asincrona
async function getWeather(lat, lon, name) {
  // Existe una funcion llamada fetch
  //  nota: await y fetch siempre van juntos
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`
  );
  const data = await response.json();
  console.log(data);
  renderWeather(data, name);
}

function renderWeather(data, name) {
  weatherMain.classList.remove("hidden");
  weatherMain.innerHTML = `
        <div class="text-center space-y-5">
          <h3 class="text-3xl font-semibold">${name}</h3>
          <p>${new Date(data.current.time).toDateString()}</p>
          <div class="flex justify-center items-center gap-8">
            <span class="text-5xl">${
              codigos[data.current.weather_code].icono
            }</span>
            <span class="text-8xl">${data.current.temperature_2m}°</span>
          </div>
        </div>
    `;

  const details = [
    {
      name: "Feels Like",
      value: `${data.current.apparent_temperature}°`,
    },
    {
      name: "Humidity",
      value: `${data.current.relative_humidity_2m}%`,
    },
    {
      name: "Wind",
      value: `${data.current.wind_speed_10m} mph`,
    },
    {
      name: "Precipitation",
      value: `${data.current.precipitation} in`,
    },
  ];

  weatherDetail.innerHTML = "";
  for (let detail of details) {
    weatherDetail.innerHTML += `
        <div class="bg-[#3d3b5e] p-4 space-y-5 rounded-lg">
          <h6>${detail.name}</h6>
          <p class="text-4xl">${detail.value}</p>
        </div>`;
  }
}





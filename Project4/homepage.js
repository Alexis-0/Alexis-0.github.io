const api = 'b0d36e88fa92aad6ed4cd2eeeb87d4df';


const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');
const barometer = document.querySelector('.b');
const humid = document.querySelector('.h');
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputVal= input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${api}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
          weather[0]["icon"]
        }.svg`;
  
        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src="${icon}" alt="${
          weather[0]["description"]
        }">
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
        msg.textContent = "Please enter a valid name";
      });
  
});


window.addEventListener('load',()=> {
    let long;
    let lat;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{

            long= position.coords.longitude;
            lat= position.coords.latitude;
            const base= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            
            fetch(base)
            .then((response) =>{
                return response.json();
            })
            .then((data) => {
                const { temp } = data.main;
                const place = data.name;
                const { description, icon } = data.weather[0];
                const { sunrise, sunset } = data.sys;
                const fahrenheit = (temp * 9) / 5 + 32;

                const sunriseGMT = new Date(sunrise * 1000);
                const sunsetGMT = new Date(sunset * 1000);

                const {pressure}= data.main;
                const {humidity}= data.main;
                

                loc.textContent = `${place}`;
                desc.textContent = `${description}`;
                tempC.textContent = `${temp.toFixed(2)} °C`;
                tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
                barometer.textContent=`${pressure} hPa`;
                humid.textContent=`${humidity} %`;
                
              });
        });

    }
});

const button = document.querySelector("#btn");
button.addEventListener ("click", getInfo);

const input = document.querySelector("#cityInput");
input.addEventListener("keypress",(e) => {
  if (e.keyCode === 13) {
      getInfo();
  }
})


const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "32ba0bfed592484379e51106cef3f204"
}

function getInfo() {
  let newName = document.querySelector("#cityInput");
  let city = document.querySelector("#city");
  city.innerHTML = `Selected: ${newName.value}`;

fetch(`${api.endpoint}forecast?q=${newName.value}&units=metric&APPID=${api.key}`)
.then(response => response.json())
.then(data => {

  for(i = 0; i<5; i++) {
      document.querySelector("#day" + (i+1) + "Min").innerHTML = "Min: "+ `${Math.round(data.list[i].main.temp_min)}<span>°</span>`;
      document.querySelector("#day" + (i+1) + "Max").innerHTML = "Max: "+ `${Math.round(data.list[i].main.temp_max)}<span>°</span>`;
      document.querySelector("#img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
      data.list[i].weather[0].icon
      +".png";
  }
})
}

window.onload = function() {
  document.querySelector("#cityinput");
  getInfo();
};

let d = new Date();
let weekday = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT",];

function checkDay(day){
  if(day + d.getDay() > 6){
      return day + d.getDay() - 7;
  }
  else{
      return day + d.getDay();
  }
}

  for(i = 0; i<5; i++){
      document.querySelector("#day" + (i+1)).innerHTML = weekday[checkDay(i)];
  }
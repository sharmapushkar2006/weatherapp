//https://api.open-meteo.com/v1/forecast?latitude=value&longitude=value&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m&current=temperature_2m,is_day&timezone=auto&forecast_days=1
const message=document.getElementById("message");
var result,data;
var url;


const temp=document.getElementById("temperature");
const total=document.getElementById("max_min_temp");
const uv=document.getElementById("uvindex");


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not supported by this browser.");
}

async function success(position) {
    lin(position.coords.latitude,position.coords.longitude);
    result= await fetch(url, {method:"GET"});
    data= await result.json();
    console.log(data.current.temperature_2m);
    temp.innerHTML=data.current.temperature_2m+"°C";
    total.innerHTML="Max Temperature: "+data.daily.temperature_2m_max[0]+"°C, Min Temperature: "+data.daily.temperature_2m_min[0]+"°C";
    uv.innerHTML="UV Index: "+data.daily.uv_index_max[0];

}

function error() {
     console.log("Unable to retrieve users location");
     message.placeholder="Error occured";
}





function lin(latitude,longitude){
    url="https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m&current=temperature_2m,is_day&timezone=auto&forecast_days=1"
    console.log(url);
}

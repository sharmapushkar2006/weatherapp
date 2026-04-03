//https://api.open-meteo.com/v1/forecast?latitude=28.7272&longitude=77.0835&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m&current=temperature_2m,is_day&timezone=auto&forecast_days=1
const message=document.getElementById("message");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not supported by this browser.");
}

async function success(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    var result= await fetch("https://api.open-meteo.com/v1/forecast?latitude="+position.coords.latitude+"&longitude="+position.coords.longitude+"&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m&current=temperature_2m,is_day&timezone=auto&forecast_days=1")
    var data= await result.json(); 
    console.log(data);
}

function error() {
    console.log("Unable to retrieve users location");
    message.placeholder="Error occured";
}

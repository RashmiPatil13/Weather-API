const x = document.getElementById("demo");
 const latitude = document.getElementById("lat");
 const longitude = document.getElementById("long");
let=lat;
let=long;

const apiKey="1be6cf345467573f598efe84810fff5a";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
hero.style.display="none";
main_container.style.display="block";

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
   
    iframe.setAttribute(
        "src", https://maps.google.com/maps?q=${lat}, ${long}&output=embed
      );
      latitudeButton.innerHTML = "lat: " + lat;
      longitudeButton.innerHTML = "long: " + long;
    }
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
   
// }

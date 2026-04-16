function sendAlert() {
  document.getElementById("status").innerText = "Getting your location...";

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("status").innerText =
      "Alert sent! Location: " + lat + ", " + lon;
  });
}

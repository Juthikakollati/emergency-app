
function triggerEmergency() {
  const output = document.getElementById("output");
  const status = document.getElementById("status");

  status.innerText = "Detecting your location...";

  if (!navigator.geolocation) {
    output.innerHTML = "Geolocation is not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    status.innerText = "Location detected!";

    output.innerHTML = `
      <p>📍 Latitude: ${lat}</p>
      <p>📍 Longitude: ${lon}</p>
      <p>🚑 Finding nearby hospitals...</p>
    `;

    // Open Google Maps with nearby hospitals
    const mapsUrl = `https://www.google.com/maps/search/hospitals/@${lat},${lon},14z`;
    window.open(mapsUrl, "_blank");

    // Optional emergency message simulation
    sendAlert(lat, lon);
  }

  function error() {
    status.innerText = "Unable to get location.";
    output.innerHTML = "Please enable location access.";
  }
}

function sendAlert(lat, lon) {
  const message = `
    EMERGENCY ALERT 🚨
    User needs help!
    Location: https://www.google.com/maps?q=${lat},${lon}
  `;

  console.log("Simulated alert sent:");
  console.log(message);

  document.getElementById("output").innerHTML += `
    <p>📢 Emergency alert simulated (check console)</p>
  `;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchGeoLocation)
  } else {
    h2.innerHTML = "Geolocation is not supported by this browser."
  }
}

function fetchGeoLocation(position){
    const latitude = position["coords"]["latitude"].toFixed(2)
    const longitude = position["coords"]["longitude"].toFixed(2)
    const positionString = `${latitude},${longitude}`
    fetch("http://localhost:3000/geolocation",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
    body: JSON.stringify({
        coordinates: positionString
    })
    })
    .then(response => response.json())
    .then(results => postLocation(results.woeid))
}

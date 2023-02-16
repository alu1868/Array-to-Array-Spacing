// DOM Collection
var formEl = document.querySelector("#user-form")


// Capture the Form
var formHandler = function(event) {
  event.preventDefault();

  // Grab Form Values
  var moduleLength = document.querySelector("input[name='module-length']").value
  var moduleWidth = document.querySelector("input[name='module-width']").value
  var numberOfRows = document.querySelector("input[name='number-of-rows']").value
  var arrayTilt = document.querySelector("input[name='array-tilt']").value
  var zipCode = document.querySelector("input[name='zip-code']").value

  console.log("module length: " + moduleLength)
  console.log("module width: " + moduleWidth)
  console.log("number of rows: " + numberOfRows)
  console.log("array tilt: " + arrayTilt)
  console.log("zipcode: " + zipCode)

  // KEY - LOCATION - DATE - TIME - TZ - ALT
  getSolarElevationAngle("key=12334567890ABC", "location=116.41,39.92", "date=20200531", "time=1230", "tz=0800", "alt=43")
}

// Convert zip code > longitude/latitude
var getSolarElevationAngle = function(key, location, date, time, tz, alt) {
  // var apiUrl = "https://api.qweather.com/v7/astronomy/solar-elevation-angle?" + location + "&" + alt  + "&" + date + "&" + time + "&" + tz + "&" + key

  var apiUrl = 'https://api.qweather.com/v7/astronomy/solar-elevation-angle?location=120.34,36.08&alt=43&date=20210220&time=1230&tz=0800&key=12334567890ABC'

  fetch(apiUrl)
    .then(function(response){
      if(response.ok) {
        response.json().then(function(data){
          console.log(data)
        })
      } else {
        console.log("Error: API failed to pull data")
      }
    })
}

// Calculate Row Width

// Grab Solar Elevation Angle 

// Grab Azimuth Correction Angle 

// Calculate Module Row Spacing

// Calculate Height Difference

formEl.addEventListener("submit", formHandler)
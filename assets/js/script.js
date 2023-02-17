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
  var MapQuestApiKey = document.querySelector("input[name='mapquest-api-key']").value
  var PVWattsApiKey = document.querySelector("input[name='pvwatts-api-key']").value


  // TESTING RESPONSE FROM FORM
  console.log("module length: " + moduleLength)
  console.log("module width: " + moduleWidth)
  console.log("number of rows: " + numberOfRows)
  console.log("array tilt: " + arrayTilt)
  console.log("zipcode: " + zipCode)
  console.log("api key: " + MapQuestApiKey)
  console.log("api key: " + PVWattsApiKey)

  getCoordinates(MapQuestApiKey)
  // KEY - LOCATION - DATE - TIME - TZ - ALT
  getSolarElevationAngle(PVWattsApiKey)
}

// Convert zip code > longitude/latitude
var getCoordinates = function() {
  
  var apiKey = "lGwguX88m408HKDM2fyIHyvnHSQYWsTB";
  var apiUrl = "http://www.mapquestapi.com/geocoding/v1/address?key=" + apiKey + "&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500"

  fetch(apiUrl)
    .then(function(response){
      if(response.ok) {
        response.json().then(function(data){
          console.log(data)
        })
      } else {
        console.log("Failed to pull mapquest api")
      }
    })
}

var getSolarElevationAngle = function(apiKey) {
  // var apiUrl = "https://developer.nrel.gov/api/pvwatts/v8.json?api_key=" + apiKey + "&azimuth=180&" + 
  
  var apiUrl = "https://developer.nrel.gov/api/pvwatts/v8.json?api_key=" + apiKey + "&azimuth=180&system_capacity=4&losses=14&array_type=1&module_type=0&gcr=0.4&dc_ac_ratio=1.2&inv_eff=96.0&radius=0&dataset=nsrdb&tilt=10&address=boulder,%20co&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7"

  fetch(apiUrl)
    .then(function(response){
      if(response.ok) {
        response.json().then(function(data){
          console.log(data)
        })
      } else {
        console.log("Failed to pull pvwatts api")
      }
    })
}

// Calculate Row Width

// Grab Solar Elevation Angle 

// Grab Azimuth Correction Angle 

// Calculate Module Row Spacing

// Calculate Height Difference

formEl.addEventListener("submit", formHandler)
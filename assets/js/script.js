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
  var apiKey = document.querySelector("input[name='api-key']").value

  console.log("module length: " + moduleLength)
  console.log("module width: " + moduleWidth)
  console.log("number of rows: " + numberOfRows)
  console.log("array tilt: " + arrayTilt)
  console.log("zipcode: " + zipCode)
  console.log("api key: " + apiKey)

  // KEY - LOCATION - DATE - TIME - TZ - ALT
  getSolarElevationAngle(apiKey)
}

// "https://developer.nrel.gov/api/pvwatts/v8.json?api_key=DEMO_KEY&azimuth=180&system_capacity=4&losses=14&array_type=1&module_type=0&gcr=0.4&dc_ac_ratio=1.2&inv_eff=96.0&radius=0&dataset=nsrdb&tilt=10&address=boulder,%20co&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7"

// Convert zip code > longitude/latitude
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
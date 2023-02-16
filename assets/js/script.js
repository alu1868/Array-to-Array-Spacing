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
}

// Convert zip code > longitude/latitude

// Calculate Row Width

// Grab Solar Elevation Angle 

// Grab Azimuth Correction Angle 

// Calculate Module Row Spacing

// Calculate Height Difference

formEl.addEventListener("submit", formHandler)
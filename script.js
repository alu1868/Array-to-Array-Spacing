// 1. Retreive user inputs about module information
// looking for module width (Landscape orientation)
// number of rows in Array
// spacing between Modules in array
// Array tilt angle
// Solar Elevation Angle
function RetreiveInputs() {
  // Array + Module Info
  var ModuleWidthId = document.getElementById("ModuleWidth");
  var RowsInArrayId = document.getElemenyById("NumberOfRows");
  var RowGapId = document.getElemenyById("RowGap");
  var ArrayTiltId = document.getElementById("ArrayTilt");

  var ZipCodeId =  document.getElementById("ZipCode");
  var SolarElevationAngleId = document.getElementById("solarElevationAngle");

  // CALCULATIONS
  var ArrayWidthSum =  (ModuleWidthId * RowsInArrayId) + (RowGapId * (RowsInArrayId - 1));
  var HeightDifference = (HeightDifferenceCalc(ArrayTiltId, ArrayWidthSum));
  var ArraySpacing = (ArraySpacingCalc(HeightDifference, SolarElevationAngleId));
  
  // MEASUREMENTS TO RETURN
  var MinimumArrayRow = (MinimumArrayRowSpacingCalc(ArraySpacing, AzimuthCorrectionAngle));
  var RowWidth = RowWidthCalc(MinimumArrayRow, ArrayTiltId, ArrayWidthSum)
}

// 2. Calculate for HeightDifference
function HeightDifferenceCalc(ArrayTilt, ArrayWidth) {
    var HeightDifference = Math.sin(ToRadians(ArrayTilt)) * ArrayWidth;
  return Math.round(HeightDifference);
}

// 3. Calculate for Array Spacing
function ArraySpacingCalc(HeightDifference, SolarElevationAngle) {
  var ArraySpacing = HeightDifference / Math.tan(SolarElevationAngle);
  return Math.round(ArraySpacing);
}

// 4. Calculate for Minimum Array Row Spacing
function MinimumArrayRowSpacingCalc(ArraySpacing, AzimuthCorrectionAngle) {
  // MEASUREMENT FOR SPACE BETWEEN ARRAYS
  return (ArraySpacing * Math.cos(ToRadians(AzimuthCorrectionAngle)));
}

// 5. Calculate for Row Width
function RowWidthCalc(MinimumArrayRow, ArrayTilt, ArrayWidth) {
  return MinimumArrayRow + (Math.cos(ToRadians(ArrayTilt)) * ArrayWidth)
}

// Degrees > radians
function ToRadians(x) {
  return (x * Math.PI)/180;
}

function SaveModuleLocal() {}

function DeployModuleArray() {}

function DeleteModuleLocal() {}


// TEST
function getsinx (degrees) {
  var Radians = (degrees * Math.PI)/180
	return Math.sin(Radians)
};

console.log(getsinx(25))
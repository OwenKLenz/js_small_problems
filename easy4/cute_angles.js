// Cute Angles

function dms(angle) {
  const ARCS_PER_INT = 60;
  angle = convertNumToDegree(angle);
  const degrees = Math.floor(angle);
  const floatingArcMinutes = decimalToArc(angle - degrees);
  const arcMinutes = Math.floor(floatingArcMinutes);
  const arcSeconds = Math.floor(decimalToArc(floatingArcMinutes - arcMinutes));

  console.log(String(degrees) + '°' +
              String(arcMinutes).padStart(2, '0') + "'" +
              String(arcSeconds).padStart(2, '0') + '"');

  function decimalToArc(decimalValue) {
    return ARCS_PER_INT * decimalValue;
  }

}

function convertNumToDegree(number) {
  return ((number % 360) + 360) % 360;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00""

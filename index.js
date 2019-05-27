// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let newDrivers = drivers.map(function(drvr){
    return drvr.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers) {
  let newDrivers = drivers.map(function(drvr){
    return Object.assign({}, drvr, {firstName: drvr.split(" ")[0], lastName: drvr.split(" ")[1]});
  })
}

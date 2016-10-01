function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i in arr){
    var a = arr[i].avgAlt+earthRadius;
    var obp = 2*Math.PI*Math.pow(Math.pow(a,3)/GM,1/2);
    obp = Math.round(obp);
    arr[i].orbitalPeriod = obp;
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  var cObj = {};
  var j = 0;//有的钱
  for(var i in cid){
    cObj[cid[i][0]] = cid[i][1];
    j += cid[i][1];
  }
  j = j.toFixed(2);
  var faceValue = {//实际值
    "PENNY":0.01,
    "NICKEL":0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1,
    "FIVE":5,
    "TEN":10,
    "TWENTY":20,
    "ONE HUNDRED":100
  };
  //所有对象属性
  var objName = [];
  //输出属性值
  var value = [];
  for(var k in cObj){
    objName.push(k);
    value.push(0);
  }
  change = cash-price;//应找钱
  if(j-change===0){
    change = "Closed";
  }
  else if(j-change < 0){
    change = "Insufficient Funds";
  }
  if(j-change>0){
    for(i=objName.length; change>0&&i>=0; i--){
      k = faceValue[objName[i-1]];
      while(cObj[objName[i-1]]!==0 && change >= k){
        change = change-k;
        change = parseFloat(change.toFixed(2));
        value[i-1] += k;
        cObj[objName[i-1]] -= k;
      }
    }
    //曾出现change==0.00999999999999994869而给通过的情况
    if(change!==0){
      change = "Insufficient Funds";
    }
    else{
      change = [];
      var a = [];
      for(i=value.length-1; i>=0; i--){
        if(value[i]!==0){
          a.push(objName[i]);
          k = value[i];
          k = parseFloat(k.toFixed(2));
          a.push(k);
          change.push(a);
        }
        a = [];
      }
    }
  }
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

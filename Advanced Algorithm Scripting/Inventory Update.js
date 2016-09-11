function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  //转换为对象
  var obj1 = {};
  var obj2 = {};
  for(var i in arr1){
    obj1[arr1[i][1]] = arr1[i][0];
  }
  for(i in arr2){
    obj2[arr2[i][1]] = arr2[i][0];
  }
  //将对象1更新
  for(i in obj2){
    if(i in obj1){
      obj1[i] += obj2[i];
    }
    else{
      obj1[i] = obj2[i];
    }
  }
  //将对象转换为二维数组，输出要按对象的首字母顺序排列
  arr1 = [];
  
  for(i in obj1){
    var arr = [];
    arr.push(i);
    arr.push(obj1[i]);
    arr1.push(arr);
  }
  arr1 = arr1.sort();
  for(i in arr1){
    var j;
    j = arr1[i][1];
    arr1[i][1] = arr1[i][0];
    arr1[i][0] = j;
  }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

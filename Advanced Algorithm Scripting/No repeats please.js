function permAlone(str) {
  //阶乘函数
  function factorial(n){
    //n>=0
    if(n===0){
      return 1;
    }
    else{
      return n * factorial (n - 1);
    }
  }
  //单个字符重复排列方式
  function strNum(n,h,j){
    return factorial(n-h)*factorial(h)*(j-h+1);
  }
  //共有多少种排列方式
    var N = str.length;//共有的位置
  var n = factorial(N);
  //重复的排列方式
  var strArr = str.split("");
  var result = 0;
  for(var i=0;i<strArr.length; i++){
    //获取重复的字符
    str = strArr.join("");
    var re = new RegExp(strArr[i],"g");
    var h = str.match(re).length;
    var j = str.length;//剩余位置
    if(h>1){
      result += strNum(N,h,j);
      var a = strArr[i];
      //clean repeat
      while(strArr.indexOf(a)!==-1){
        if(i===strArr.indexOf(a)){
          i--;
        }
        strArr.splice(strArr.indexOf(a),1);
      }
    }
  }
  result = n - result;
  return result;
}
//这个程序有错误，暂时只能通过FCC的测试。错误应该在计算重复的个数那里,复现为重复字符大于非重复字符
permAlone('aabac');
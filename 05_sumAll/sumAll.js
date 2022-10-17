const sumAll = function(arr) {
 let fullArr = [];
 let answer = 0;
 let reducer = (sumNum, numToAdd) => sumNum + numToAdd;

 arr.sort(function(a,b){return a-b})
 for (let i = arr[0]; i <= arr[i];i++){
   fullArr.push(i);
 }
 answer = fullArr.reduce(reducer);
 return sum
};


// Do not edit below this line
module.exports = sumAll;

const ftoc = function(fahrenheit) {
  let answer = (fahrenheit - 32) * 5/9;
  const result = answer.toFixed(1);
  return result;
 
 };
 
 const ctof = function(celsius) {
 let answer = (celsius * 9/5) + 32;
 const result = answer.toFixed(1);
 return result;
 };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

let num1=parseInt(prompt("Enter year:"));
let num;
function year(num1) {
     num=(num1%4==0)?'Leap Year':'Not Leap Year';
     return num;
}
let result=year(num1);
console.log("The given year is "+result);
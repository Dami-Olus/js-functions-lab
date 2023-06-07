//1

const maxOfTwoNumbers = (num1,num2) => {
  return num1>num2?num1:num2;
}

console.log(maxOfTwoNumbers(8,6))

//2

function maxOfThree(num1, num2, num3) {
if(num1>num2&&num2>num3){
  return num1
} else if(num1<num2&&num2<num3){
  return num3
} else {
  return num2
}
}

console.log(maxOfThree(5,9,2))
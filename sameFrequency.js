// Check if two numbers have the same frequency

function sameFrequency(num1, num2){
  let a = num1.toString().split('').sort((a,b) => a-b).toString()
  let b = num2.toString().split('').sort((a,b) => a-b).toString()
  return (a===b)
}

console.log(sameFrequency(3589578,5879385))

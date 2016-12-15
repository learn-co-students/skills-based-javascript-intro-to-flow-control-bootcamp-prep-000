// Now, in `flow-control.js` let's write a function called `basicTeenager` that accepts an age as a parameter.
// The function should contain an if-statement that checks to see if the age is a teenager.
// If the age is between 13 and 19, return `"You are a teenager!"`
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}
// Define a function `teenager` that accepts an age as a parameter.
// If the age is between 13 and 19 it should return `"You are a teenager!"`.
// Otherwise, the function should return `"You are not a teenager"`.
function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager"
  } else {
    return "You are not a teenager"
  }
}
// Define a function `ageChecker` that takes in an age as a parameter. If the age is
// between 13-19 it should return `"You are a teenager!"`.
// If the age is 12 or below, it should return `"You are a kid"`. If the age is
// above 19, it should return `"You are a grownup"`
function ageChecker(age) {
  switch age:
  (age < 13) {
    return "You're a kid!"
  else if (age > 19) {
    return "You are an grownup!"
  } else {
    return "You are a teenager!"
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager!" : "You are not a teenager!"
}

function switchAge(age) {
   var result = '';
   switch (age) {
   case 13 :
   case 14 :
   case 15 :
   case 16 :
   case 17 :
   case 18 :
   case 19 : result = "You are a teenager"
   default : result = "You are not a teenager"
 }
 return result
}

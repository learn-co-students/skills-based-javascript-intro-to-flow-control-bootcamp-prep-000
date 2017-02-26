function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return 'You are a teenager!'
  }
}

function teenager(age) {
  if (age > 12 && age < 20) {
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
  }
}

/*
//I want to try using the terser version
function teenager(age) {
  if (age > 12 && age < 20) {
    return 'You are a teenager!'
  }
  return 'You are not a teenager'
}
*/

function ageChecker(age) {
  if (age > 12 && age < 20) {
    return 'You are a teenager!'
  }
  else if (age <= 12) {
    return 'You are a kid'
  }
  else {
    return 'You are a grownup'
  }
}

//in order to return the evaluation of the ternary operator,
//need to prepend `return` to the expression
function ternaryTeenager(age) {
  return age > 12 && age < 20 ? 'You are a teenager' : 'You are not a teenager'
}

/*Define a function `switchAge` that accepts an age as a parameter.
The case statement should switch on `age` and return `"You are a teenager"`
if the age is 13, 14, 15, 16, 17, 18, or 19, and
return `"You have an age"` as the default.*/

function switchAge(age) {
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
     return 'You are a teenager'
      break;
    default:
    return 'You have an age'
  }
}

function basicTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager!" : undefined
}

function teenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager!" : "You are not a teenager" 
}

function ageChecker(age) {
  switch (true) {
    case (age > 19): return "You are a grownup"
    case (age < 13): return "You are a kid"
    default: return "You are a teenager!"
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager" 
}

function switchAge(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You have an age" 
}

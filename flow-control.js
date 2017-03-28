function basicTeenager(age) {
if (age <= 19 && age >= 13){
  return "You are a teenager!"
}
}

function teenager(age) {
  if (age <= 19 && age >= 13){
    return "You are a teenager!"
  } else {return "You are not a teenager"}
}

function ageChecker(age) {
if (age <= 12) {
  return "You are a kid"
} else if (age <= 19 && age >= 13){
  return "You are a teenager!"
} else { return "You are a grownup"}
}

function ternaryTeenager(age) {
return (age <= 19 && age >= 13) ? "You are a teenager" :
"You are not a teenager"
}

teen = "You are a teenager"
function switchAge(age) {
  var teen = "You are a teenager"
  switch(age) {
    case 13:
    return teen
    case 14:
    return teen
    case 15:
    return teen
    case 16:
    return teen
    case 17:
    return teen
    case 18:
    return teen
    case 19:
    return teen
    default:
    return "You have an age"
  }

}


var basicTeenager = function(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
}
}

var teenager = function(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  } else {
    return 'You are not a teenager'
  }
}

var ageChecker = function(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!"
  } else if (age <= 12){
    return "You are a kid"
  } else if (age >= 20){
    return "You are a grownup"
  }

}

var ternaryTeenager = function(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager"
  } else if (age <= 12 || age >= 20){
    return "You are not a teenager"
  }
}

function switchAge(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager"
  } else {
    return "You have an age"
  }
}

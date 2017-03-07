function basicTeenager(age) {
    if (age >= 13 && age <=19) {
        return "You are a teenager!";
    }
}


function teenager(age) {
  if(age >= 13 && age <= 19) {
      return "You are a teenager!";
    }
  else {
      return "you are not a teenager";
  }
}

function ageChecker(age) {
  if(age <= 13 && age <= 19) {
    return "You're a teenager!"
  }
  else if(age < 13) {
    return "You are a kid"
  }
  else if(age > 19) {
    return "You are a grownup"
  }
}


return function ternaryTeenager(age) {
   age >= 13 && age <= 19 ?
   "You are a teenager" :
   "You are not a teenager";
}

function switchAge(age) {

}

function basicTeenager(age) {
  if (age <= 19 && age >= 13)
  {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age <= 19 && age >=13)
  {
    return "You are a teenager!"

  } else {
    return "You are not a teenager"
    }

}

function ageChecker(age) {
  if (age <= 19 && age >=13){
    return "You are a teenager!"

  }  else if(age<12){
      return "You are a kid"
    } else if(age>19){
        return "You are a grownup"
      }
}

function ternaryTeenager(age) {
  if (age <= 19 && age >=13){
    return "You are a teenager!"{
      return conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse
    }

}

function switchAge(age) {
  switch (age) {
    case "3, 14, 15, 16, 17, 18, or 19":
      return " You are a teenage"

    default:
      return "You have an age"

  }

}

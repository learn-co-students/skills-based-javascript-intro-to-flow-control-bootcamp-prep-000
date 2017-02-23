function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}



function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else if (age <= 12) {
    return "You are a kid"
  } else if (age >= 20) {
    return "You are a grownup"
  }

}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ?
  "You are a teenager" :
  "You are not a teenager"
}

function switchAge(age) {
  var x = "You are a teenager"
  switch(age) {
    case 13:
      return x;
      break;
    case 14:
      return x;
      break;
    case 15:
      return x;
      break;
    case 16:
      return x;
      break;
    case 17:
      return x;
      break;
    case 18:
      return x;
      break;
    case 19:
      return x;
      break;
    default:
        return "You have an age"
  }

}

function basicTeenager(age) {
  if ( age > 12 && age < 20)
  {
    return "You are a teenager!"
  }

}

function teenager(age) {
  if ( age > 12 && age < 20)
  {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if ( age > 12 && age < 20)
  {
    return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are a kid"
  }
  else
  {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return age < 12 || age > 20?  "You are not a teenager" : "You are a teenager"

}

function switchAge(age) {
  switch (age)
  {
    case 13:
      console.log("You are a teenager");
      break;
    case 14:
      console.log("You are a teenager");
      break;
    case 15:
      console.log("You are a teenager");
      break;
    case 16:
      console.log("You are a teenager");
      break;
    case 17:
      console.log("You are a teenager");
      break;
    case 18:
      console.log("You are a teenager");
      break;
    case 19:
      console.log("You are a teenager");
      break;
    default:
      console.log("You have an age");

  }
}

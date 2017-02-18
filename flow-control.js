function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
  }
}

/* FWIW: I spent ~2+ hours on this excercise because it kept returning that I had
failed these tests, over and over and over again, until it just now decided the
tests had passed afterall. Oh, wait, now we're back to failing all the tests again
even though I haven't changed anything in the code.*/

function teenager(age) {
  if(age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch(age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
    default:
      return "You have an age";
    }
  }

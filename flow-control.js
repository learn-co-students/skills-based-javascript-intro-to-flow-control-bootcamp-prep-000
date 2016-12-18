function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }

  return;
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
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
  console.log("age is " + age);
  switch (true) {
    case (age >= 13 && age <= 19):
      console.log("Teenager");
      return "You are a teenager";
      break;
    default:
      console.log("Not teenager");
      return "You have an age";
  }
}

switchAge(4);
switchAge(14);

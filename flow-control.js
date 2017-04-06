function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return console.log("You are teenager!");
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return console.log("You are teenager!");
  } else {
    return console.log("you are not a teenager");
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return console.log("You are a teenager!");
  } else if (age <= 12) {
    return console.log("You are a kid");
  } else {
    return console.log("You are grownup");
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? console.log("You are a teenager") : console.log("You are not a teenager");
}

function switchAge(age) {
  switch (age) {
  case 13:
    return console.log("You are a teenager");
    break;
  case 14:
    return console.log("You are a teenager");
    break;
  case 15:
    return console.log("You are a teenager");
    break;
  case 16:
    return console.log("You are a teenager");
    break;
  case 17:
    return console.log("You are a teenager");
    break;
  case 18:
    return console.log("You are a teenager");
    break;
  case 19:
    return console.log("You are a teenager");
    break;
  default:
    return console.log("You are not a teenager");
}
}

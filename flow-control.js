function realTeenager(age) {
  return age >= 13 && age <= 19;
}

function basicTeenager(age) {
if (realTeenager(age)) return "You are a teenager!";
}

function teenager(age) {
if (realTeenager(age)) return "You are a teenager!";
else return "You are not a teenager"
}

function ageChecker(age) {
if (realTeenager(age)) {return "You are a teenager!";}
else if (age < 13) {return "You are a kid";}
else return "You are a grownup";
}

function ternaryTeenager(age) {
 return realTeenager(age) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
switch (realTeenager(age)) {
  case true:
    return "You are a teenager";
    break;
  default:
    return "You have an age"
}
}

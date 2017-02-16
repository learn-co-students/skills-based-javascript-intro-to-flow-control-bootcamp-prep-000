function basicTeenager(age) {
 if (age > 12 && age < 20) {
 return "You are a teenager!"
 }
}

function teenager(age) {
if (age > 12 && age < 19) {
 return  "You are a teenager!"
} else {
  return  "You are not a teenager"
}
}

function ageChecker(age) {
if (age > 19) {
  return "You are a grownup"
} else if (age < 13) {
  return "You are a kid"
} else {
  return "You are a teenager!"
}
}

function ternaryTeenager(age) {
return (age > 12 && age < 20)? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
switch (age) {
case 13:
  break;
case  14:
  break;
case 15:
  break;
case  16:
  break;
case  17:
  break;
case 18:
  break;
  case 19:
  break;
default:
  return  "You have an age"
}
  return "You are a teenager"
}

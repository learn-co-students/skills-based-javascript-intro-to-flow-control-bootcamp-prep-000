function basicTeenager(age) {
  if(13 <=age && age <= 19)
  return "You are a teenager!"
}

function teenager(age) {
  var str = ""
  if(13 <=age && age <= 19) {
    str = "You are a teenager!"
  } else {
    str = "You are not a teenager"
  }
  return str
}

function ageChecker(age) {
var str = ""
if (age < 13) {
  str = "You are a kid"
}
else if( age <= 19) {
  str = "You are a teenager!"
}
else {
  str = "You are a grownup"
}
return str
}

function ternaryTeenager(age) {
return (age>=13 && age<=19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
var str = ""
switch(age) {
  case 13:
    str = "You are a teenager";
    break;
  case 14:
    str = "You are a teenager";
    break;
  case 15:
    str = "You are a teenager";
    break;
  case 16:
    str = "You are a teenager";
    break;
  case 17:
    str = "You are a teenager";
    break;
  case 18:
    str = "You are a teenager";
    break;
  case 19:
    str = "You are a teenager";
    break;
  default:
    str = "You have an age";
}
return str
}

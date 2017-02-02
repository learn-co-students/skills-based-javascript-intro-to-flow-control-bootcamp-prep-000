function basicTeenager(age) {
if (age>=13 && age<=19) {
return "you are a teenager!"}
}

function teenager(age) {
if (age>=13 && age<=19) {
return "you are a teenager!"}
else { return "you are not a teenager!"}
}

function ageChecker(age) {
if (age<=12) {
return "you are a kid!"}
else if (age>=13 && age<=19) {
return "you are a teenager!"}
else {
return "you are a grown up!"}
}

function ternaryTeenager(age) {
return age>=13&&age<=19 ? "you are a teenager!" : "you are not a teenager!"
}

function switchAge(age) {
switch(age) {
  case 13:
    console.log("You are a teenager!");
    break;
  case 14:
    console.log("You are a teenager!");
    break;
  case 15:
    console.log("You are a teenager!");
    break;
  case 16:
    console.log("You are a teenager!");
    break;
  case 17:
    console.log("You are a teenager!");
    break;
  case 18:
    console.log("You are a teenager!");
    break;
  case 19:
    console.log("You are a teenager!");
    break;
  default:
    console.log("You have an age!)
                }
}

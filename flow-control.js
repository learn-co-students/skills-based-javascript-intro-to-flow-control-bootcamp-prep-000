function basicTeenager(age) {
if (age >= 13 && age <== 19 ) {
  return " You are a teenager";
}
};
basicTeenager(19)
function teenager(age) {
if(age >= 13 && age <= 19){
  return "You are a teenager";
}
else {
  return "You are not a teenager"
}
};
teenager(19);
function ageChecker(age) {
if(age >= 13 && <= 19){
  return "You are a teenager";
} else if (age <= 12) {
  return "You are a kid"
} else {
  return " You are a grown up"
}
}
ageChecker(25);
function ternaryTeenager(age) {
return age >= 13 && age <= 19? "You are a teenager": "You are not a teenager"
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
      return 'You are a teenager';
     default:
      return 'You have an age';
   }

}

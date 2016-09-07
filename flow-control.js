function basicTeenager(age) {
   if((age >= 13) && (age <= 19)){
  return "You are a teenager!";
   }
   return undefined;
}
basicTeenager(13);
basicTeenager(12);

function teenager(age) {
  if((age >= 13) && (age <= 19)){
  return "You are a teenager!";
  }
  return "You are not a teenager";
}
teenager(13);
teenager(12);
teenager(29);

function ageChecker(age) {
  if((age >= 13) && (age <= 19)){
  return "You are a teenager!";
} else if(age <= 12){
  return "You are a kid"
}
  return "You are a grownup";
}
ageChecker(13);
ageChecker(12);
ageChecker(29);

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (age){
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  return "You are a teenager"

  default:
  return "You have an age"
}
}

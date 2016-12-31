function basicTeenager(age) {
  if (age >= 19 || age >= 13){
    return "You are a teenager!";
  }
}
basicTeenager(15);


function teenager(age) {
  if (age <= 19 && age >=13){
    return "You are a teenager!";
}
  else{
    return "You are not a teenager";
  }
}
teenager(19);

function ageChecker(age) {
  if (age <= 19 && age >=13){
  return ("You are a teenager!")
}else if (age <= 12){
  return "You are a kid";
}else if (age > 19){
  return "You are a grownup";
  }

}
ageChecker(15);

function ternaryTeenager(age) {
  return (age <= 19 && age >= 13) ? "You are a teenager" : "You are not a teenager"
}
ternaryTeenager(17);

function switchAge(age) {
  switch (age <= 19 && age >= 13) {
    case (age <= 19 || age >= 13) :
      return "You are a teenager"
      break;
    default:
        return "You have an age"
      break;


  }
}
switchAge(20);

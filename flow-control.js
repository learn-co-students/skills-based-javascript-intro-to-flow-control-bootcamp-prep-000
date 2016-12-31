function basicTeenager(age) {
  if (19 >= age || age <=13){
    return "You are a teenager";
}
  else{
    return "You are a grownup";
  }
}
basicTeenager(15);


function teenager(age) {
  if (19 >= age || age <= 13){
    return "You are a teenager";
}
  else{
    return "You are a grownup";
  }
}
teenager(19);

function ageChecker(age) {
  if (19 >= age || age <= 13){
  return ("You are a teenager")

}else if (age < 12){
  return "you are a kid";
}else if (age > 19){
  return "you are a grownup";
  }

}
ageChecker(10);

function ternaryTeenager(age) {
  return if (19 >= age || age <=13) ? "you are a teenager" : "you are not a teenager"
}
ternaryTeenager(17);

function switchAge(age) {
  switch (age) {
    case (19 >= age || age <= 13):
      return "you are a teenager"
    default:
        return "you have an age"

      break;

  }
}
switchAge(21);

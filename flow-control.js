function basicTeenager(age) {
  if (age >= 13 && age<= 19){
return "You are a teenager!";
}else{
  return undefined;
}
}
basicTeenager(5)

function teenager(age) {
  if (age >= 13 && age <= 19){
return "You are a teenager!";
} else {
  return "You are not a teenager";
 }
}
 teenager(16)

function ageChecker(age) {
  if (age >= 13 && age <=19){
return "You are a teenager!";
}else if (age <=12 ){
  return "You are a kid";
} else {
  return "You are a grownup";
}
}
ageChecker(22);

function ternaryTeenager(age) {
if(age >=13 && age <=19){
  return "You are a teenager";
} else { return "You are not a teenager";
}
}
ternaryTeenager(14)

function switchAge(age) {
  if(age>=13 && age <=19) {
    return "You are a teenager";
  }else {
      return "You have an age";
    }
  }
switchAge(15)

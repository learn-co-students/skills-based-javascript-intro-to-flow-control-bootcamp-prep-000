function basicTeenager(age) {
if (age>=13&&age<=19){return "You are a teenager!"}
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"}
    else {return "You are not a teenager"}
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"}
    else if (age<13) {return "You are a kid"}
    else {return "You are a grownup"}
}

function ternaryTeenager(age) {
return age>=13&&age<=19? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
var mout = "You are a teenager"
switch(age){
  case 13:
  return mout
  case 14:
  return mout
  case 15:
  return mout
  case 16:
  return mout
  case 17:
  return mout
  case 18:
  return mout
  case 19:
  return mout
  default:
  return 'You have an age'

}
}

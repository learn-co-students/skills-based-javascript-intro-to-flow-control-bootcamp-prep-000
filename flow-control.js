function basicTeenager(age) {
if(12<age && age<20){
  return 'You are a teenager!'
}
return
}

function teenager(age) {
  if(12<age && age<20){
    return 'You are a teenager!'
  }
  return 'You are not a teenager'
}

function ageChecker(age) {
if(age<13){
  return 'You are a kid'
}else if(20<age){
  return 'You are a grownup'
}else{
  return 'You are a teenager!'
}
}

function ternaryTeenager(age) {
return 12<age && age<20 ? 'You are a teenager':'You are not a teenager'
}

function switchAge(age) {
switch(12<age && age<20){
  case true:
  return 'You are a teenager'
  break;
  default:
  return 'You have an age'
}
}

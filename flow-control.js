function basicTeenager(age) {
  if(age>12 && age < 20){
    return "You are a teenager!"
  }


}

function teenager(age) {
  if(age>12 && age<20){
    return "You are a teenager!"
  }
else {
  return "You are not a teenager"
}
}

function ageChecker(age) {
  if(age>12 && age<20){return "You are a teenager!"}
  if(age<13){return "You are a kid"}
  if(age>19){return "You are a grownup"}

}

function ternaryTeenager(age) {
  if(age>12 && age<20){ return "You are a teenager"}
  if(age>12 && age<20 === false){return "You are not a teenager"}

}

function switchAge(age) {
  if(age>12 && age<20){return "You are a teenager"}
  switch(age){
    case 13,14,15,16,17,18,19:
    return "You are a teenager"
    default:
    return "You have an age"
  }
}

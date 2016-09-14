function basicTeenager(age) {
if (age >=13 && age <=19){
  return "You are a teenager!";
}};
basicTeenager

function teenager(age) {
  if (age >=13 && age <=19){
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager"
  }
};
teenager

function ageChecker(age) {
  if (age >=13 && age <=19){
    return "You are a teenager!";
  }

  else if (age <=13){
    return "You are a kid"
  }

  else if (age >=19) {
    return "You are a grownup"
  }

  else {
    return "You are not a teenager"
  }

}

function ternaryTeenager(age) {
  if (age >=13 && age <=19){
    return "You are a teenager";
  }
  else {
    return "You are not a teenager";
  }
}

function switchAge(age) {
  if (age >=13 && age <=19){
    return "You are a teenager";
  }
  else if (age <=13){
    return "You have an age"
  }

  else if (age >=19) {
    return "You have an age"
  }

  else {
    return "You are not a teenager"
  }


}

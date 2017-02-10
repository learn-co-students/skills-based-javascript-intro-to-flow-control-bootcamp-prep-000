function basicTeenager(age) {
  console.log("basicTeenager function invoked")
  // var message;
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  //  message;
}

function teenager(age) {
  console.log("teenager function invoked")
  var message
  if (age >= 13 && age <= 19){
    message = "You are a teenager!"
  }else{
    message = "You are not a teenager"
  }
  return message;
}

function ageChecker(age) {
  var message
  if (age>=13 && age<=19){
    message = "You are a teenager!"
  }else if(age<=12){
    message = "You are a kid"
  }else{
    message = "You are a grownup"
  }
  return message;
}

function ternaryTeenager(age) {
  return age >= 13 && age <=19 ? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
    switch(age){
      case 13:
        return "You are a teenager";
      case 14:
        return "You are a teenager";
      case 15:
        return "You are a teenager";
      case 16:
        return "You are a teenager";
      case 17:
        return "You are a teenager";
      case 18:
        return "You are a teenager";
      case 19:
        return "You are a teenager";
      default:
        return "You have an age";
  }
}

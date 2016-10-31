var text
function basicTeenager(age){
  if (age >=13 && age <=19){
    return "You are a teenager!"
  }
}

function teenager(age){
  if (age >=13 && age <=19){
    text = "You are a teenager!"
  }
  else{
    text = "You are not a teenager"
  }
  return text
}

function ageChecker(age){
  if (age >=13 && age <=19){
    text = "You are a teenager!"
  }else if(age <13){
    text = "You are a kid"
  }else{
    text = "You are a grownup"
  }
  return text
}

function ternaryTeenager(age){
  var text =(age >=13 && age <=19) ? "You are a teenager" : "You are not a teenager";
  return text
}

function switchAge(age){
   switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      text ="You are a teenager"
    break;
    default:
      text = "You have an age";
  }
  return text
}

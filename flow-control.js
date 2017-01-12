function basicTeenager(age) {
  if (age >= 13 && age <= 19){
    return("You are a teenager!")
  }
  else {
    return undefined
  }
}



// Function 2 

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return("You are a teenager!")
  } 
  else {
    return("You are not a teenager")
  }
}

// Funion 3

function ageChecker(age) {
  if (age > 19) {
    return "You are a grownup"
  }
  else if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  else {
    return "You are a kid"
  }
}

// Function 4 tenerary


function ternaryTeenager(age) {
  return (age<=19 && age>=13) ? "You are a teenager" : "You are not a teenager"
}


// switch Function
function switchAge(age) {
  switch(age) {
//      case age >=13 && age <=19: return "You are a teenager";
      case 13: return("You are a teenager");
      break;
      case 14: return("You are a teenager");
      break;
      case 15: return("You are a teenager");
      break;
      case 16: return("You are a teenager");
      break;
      case 17: return("You are a teenager");
      break;
      case 18: return("You are a teenager");
      break;
      case 19: return("You are a teenager");
      break;
      default: return "You have an age";
    }
}


// need to review last swtich staement







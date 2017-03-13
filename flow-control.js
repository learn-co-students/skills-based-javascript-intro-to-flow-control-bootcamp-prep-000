// define function basicTeenager
function basicTeenager(age){ // If age is between 13 and 19, return You are a teenager!
  if (age >=13 && age <=19){
    return "You are a teenager!"
  }
}
// Define function teenager
function teenager(age){ //If age is between 13 and 19, return You are a teenager?
  if (age >=13 && age <=19){
    return "You are a teenager!"
  }else { // If age is not between 13 and 19, return You are not a teenager
    return "You are not a teenager"
  }
}
// Define function ageChecker
function ageChecker(age){
  if (age >=13 && age <= 19){ // If age is between 13 and 19, return You are a teenager!
    return "You are a teenager!"
  }else if (age <=12) {      // If age is less than 12, return You are a kid!
    return "You are a kid"
  }
  else {                    // Return You are a grownup for all other ages
    return "You are a grownup"
  }
  }
// Define function ternaryTeenager
function ternaryTeenager(age){
  // Returns You are a teenager if ager is between 13 and 19
  // Returns You are not a teenager for all other ages
  return age >=13 && age <=19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  switch(age){ // Evaluates each case with the expression age
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    return "You are a teenager" // Returns You are a teenager if a case matches
    break;
    default:
    return "You have an age" // Defaults to You have age if there is no match
  }
}

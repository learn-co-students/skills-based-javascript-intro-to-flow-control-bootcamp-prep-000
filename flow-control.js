function basicTeenager(age) {
    if (age >= 13 && age <= 19)
        return "You are a teenager!";
}

function teenager(age) {
  if (age >= 13 && age <= 19)
  return("You are a teenager!");
  else
  return("You are not a teenager");
  }

function ageChecker(age) {
  if (age >= 13 && age <= 19)
  return("You are a teenager!");
  if (age <= 12)
  return("You are a kid")
  else
  return("You are a grownup");
}

function ternaryTeenager(age) {
  return(age >= 13 && age <= 19) ? ("You are a teenager") : ("You are not a teenager")
}


function switchAge(age) {
    switch(age) {
    case 13:
       age = 13;
       break;
    case 14:
       age = 14;
       break;
    case 15:
       age = 15;
       break;
    case 16:
       age = 16;
       break;
    case 17:
       age = 17;
       break;
    case 18:
      age = 18;
       break;
    case 19:
       age = 19;
       break;
    default:
       return "You have an age";
}
 return "You are a teenager"
}


function basicTeenager(age = 15) {
  if (age >= 13 && age <= 19)
   {
     return "You are a teenager!";
   }
 }

function teenager(age = 15) {
  if (age >= 13 && age <= 19)
    {
      return "You are a teenager!";
    }
  else
    {
      return "You are not a teenager";
    }
}

function ageChecker(age = 15) {
  if (age >= 13 && age <= 19)
    {
       return "You are a teenager!";
    }
  else if (age < 13)
    {
      return "You are a kid";
    }
  else if (age > 19)
    {
      return "You are a grownup";
    }
}

function ternaryTeenager(age = 17) {
  return age >= 13 && age <= 19 ? "You are a teenager":"You are not a teenager";
}

function switchAge(age = 15) {
    switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
return "You are a teenager";
break;
default:
  return "You have an age";
break;
  }
}

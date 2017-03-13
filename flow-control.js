function basicTeenager(age) {
  if ( age <= 19 && age >= 13) { //if age is less than or equal to 19 AND greater than or equal to 13 then is is true.
    return 'You are a teenager!'
  }
}
basicTeenager();


function teenager(age) {
  if ( age <= 19 && age >= 13) {
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
}
}
teenager(20);

function ageChecker(age) {
  if(age <= 19 && age >= 13) { //If age is equal to or less than 19 AND age is Greater than or equal to 13 then you are a teen Else if age is 12 or lower you are a kid, other wise we have ruled out any other options so then they must be and adult
    return 'You are a teenager!'
  }
  else if (age <= 12) {
    return 'You are a kid'
  }
  else {
    return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
  return age <= 19 && age >= 13 ? 'You are a teenager' : 'You are not a teenager'
} //ternary operator is very new to me but seems very helpful.

function switchAge(age) {
   switch(age) {
      case 13: return 'You are a teenager'
      break;
      case 14: return 'You are a teenager'
      break;
      case 15: return 'You are a teenager'
      break;
      case 16: return 'You are a teenager'
      break;
      case 17: return 'You are a teenager'
      break;
      case 18: return 'You are a teenager'
      break;
      case  19: return 'You are a teenager'
      break;
      default: return  'You have an age'
    }
   }

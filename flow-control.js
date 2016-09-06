function basicTeenager(age) {
  if (age >=13 && age <= 19){
    return 'You are a teenager!';
  }
}

function teenager(age) {
  if (age >=13 && age <=19){
    return 'You are a teenager!';
  }
  else {
    return 'You are not a teenager';
  }
}

function ageChecker(age) {
  if (age >=13 && age <=19){
    return'You are a teenager!';
  }
  else if (age<13){
    return'You are a kid';
  }
  else if (age>19){
    return'You are a grownup';
  }
}

function ternaryTeenager(age) {
  return age>=13&&age <=19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
  case 13:
      // code to be executed if case n is true
      return 'You are a teenager';
  case 14:
      // code to be executed if case m is true
      return 'You are a teenager';
  case 15:
          // code to be executed if case n is true
      return 'You are a teenager';
  case 16:
          // code to be executed if case m is true
      return 'You are a teenager';
  case 17:
              // code to be executed if case n is true
      return 'You are a teenager';
  case 18:
              // code to be executed if case m is true
      return 'You are a teenager';
  case 19:
                  // code to be executed if case m is true
      return 'You are a teenager';
  default:  // all other cases
      return 'You have an age';
}
}

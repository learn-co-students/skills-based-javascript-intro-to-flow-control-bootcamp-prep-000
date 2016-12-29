function basicTeenager(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  } else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  } else if (age >= 20) {
    return 'You are a grownup'
  } else if (age <= 12) {
    return 'You are a kid'
  }
  // switch(age){
  //   case age >= 20:
  //     return 'You are a grownup';
  //     break;
  //   case age <= 12:
  //     return 'You are a kid';
  //     break;
  //   case 13 <= age && age <= 19:
  //     return 'You are a teenager!';
  //     break;
  // }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager'
  } else {
    return 'You have an age'
  }
}

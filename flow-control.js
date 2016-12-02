function basicTeenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!";
  }
};

function teenager(age) {
  switch(age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return 'You are a teenager!';
      break;
    default:
      return 'You are not a teenager';
  }
};

function ageChecker(age) {
  if (age > 12 && age <20) {
    return "You are a teenager!";
  } else if (age >= 20){
    return 'You are a grownup';
  } else {
    return "You are a kid";
  }
}

function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? 'You are a teenager':'You are not a teenager';
}

function switchAge(age) {
  switch(age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return 'You are a teenager';
      break;
    default:
      return 'You have an age';
  }
}

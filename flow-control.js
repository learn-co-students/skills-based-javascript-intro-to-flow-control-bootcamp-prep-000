function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!';
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!';
  } else {
    return 'You are not a teenager';
  }
}

function ageChecker(age) {
  var result = 'You are a ';

  if (age <= 12) {
    result += 'kid';
  } else if (age <= 19) {
    result += 'teenager!';
  } else {
    result += 'grownup';
  }

  return result;
}

function ternaryTeenager(age) {
  return `You are ${(age >= 13 && age <= 19) ? '' : 'not '}a teenager`;
}

function switchAge(age) {
  switch (age) {
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

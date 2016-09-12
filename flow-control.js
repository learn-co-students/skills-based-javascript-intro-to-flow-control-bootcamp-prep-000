function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
	return "You are not a teenager"
}
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
    /* moved if up to same line as else, if you are checking other statements after the first if, use else if*/
  } else if (age <= 12) {
      return "You are a kid"
    /* you can either do else with no conditional statement to check or else if like here */
    } else if (age > 19) {
	return "You are a grownup"
  }
}
/* Above is working fine */

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager": "You are not a teenager";
}

/* Switch, 'compiled' */
function switchAge(age) {
  switch(true) {
    case (age >= 13 && age <= 19):
      return "You are a teenager";
    default:
      return "You have an age";
  }
}

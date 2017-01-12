function basicTeenager(age) { //* flow-control basicTeenager should return "You are a teenager!" if the age is between 13-19
  if (13 <= (age) && (age) <= 19) {
  return 'You are a teenager!'}
}

/*  flow-control teenager should return "You are a teenager!" if the age is between 13-19
    flow-control teenager should return "you are not a teenager" if the age is not between 13-19 */
function teenager(age) {
  if (13 <= (age) && (age) <= 19) {
  return 'You are a teenager!'}
  else {
  return 'You are not a teenager'
}
}

/*  flow-control ageChecker should return "You are a teenager!" if the age is between 13-19:
    flow-control ageChecker should return "You are a kid" if the age is 12 or below:                                                  
    flow-control ageChecker should return "You are a grownup" if the age is 20 or above */
function ageChecker(age) {
  if (13 <= (age) && (age) <= 19) {
  return 'You are a teenager!'}
  else if ((age) <= 12) {
  return 'You are a kid'
}
  else if ((age) >= 20) {
  return 'You are a grownup'
  }
}

/*  flow-control ternaryTeenager should return "You are a teenager" if age is between 13-19
    flow-control ternaryTeenager should return "You are not a teenager" if age not between 13-19 */
function ternaryTeenager(age) {
  if (13 <= (age) && (age) <= 19) {
  return 'You are a teenager'}
  else {
  return 'You are not a teenager'
  }
}

/*  flow-control switchAge should return "You are a teenager" if age is between 13-19
    flow-control switchAge should return "You are not a teenager" if age not between 13-19 */
function switchAge(age) {
  if (13 <= (age) && (age) <= 19) {
  return 'You are a teenager'}
  else {
  return 'You have an age'
  }
}

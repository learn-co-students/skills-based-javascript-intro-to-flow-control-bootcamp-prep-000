function basicTeenager(age) {
  if( age >= 13 && age <= 19) {
    return  'You are a teenager!';
  }

  else {
    return undefined
  }
basicTeenager(14)
}

function teenager(age) {
  if( age >= 13 && age <= 19) {
    return  'You are a teenager!';
  }
  else{
    return 'You are not a teenager'
  }
  teenager(20)
}

function ageChecker(age) {
  if( age >= 13 && age <= 19) {
    return  'You are a teenager!';
  }
  else if( age < 13 ){
    return 'You are a kid';
  }
  else{
    return 'You are a grownup';
  }
  ageChecker(12)
}

function ternaryTeenager(age) {
  if( age >= 13 && age <= 19) {
    return  'You are a teenager';
  }
  else{
    return 'You are not a teenager'
  }
ternaryTeenager(20)
}

function switchAge(age) {
  if( age >= 13 && age <= 19) {
    return  'You are a teenager';
  }
else{
  return 'You have an age';
}
}

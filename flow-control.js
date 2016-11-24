function basicTeenager(age) {
  var x = 'You are a teenager!'
  if ( age > 12 && age < 20)
    return x
}

function teenager(age) {
  var x = 'You are a teenager!'
    , y = 'You are not a teenager'

  if ( age > 12 && age < 20)
    return x
  else
    return y
}

function ageChecker(age) {
  var x = 'You are a teenager!'
    , y = 'You are a kid'
    , z = 'You are a grownup'

  if ( age > 20 ) return z
  if ( age > 12 && age < 20 ) return x
  return y
}

function ternaryTeenager(age) {
  var x = 'You are a teenager'
    , y = 'You are not a teenager'

  return ( age > 12 && age < 20) ? x : y
}

function switchAge(age) {
  var x = 'You are a teenager'
    , y = 'You have an age'

  switch (age > 12 && age < 20) {
    case true:
      return x
      break;
    default:
      return y

  }

}

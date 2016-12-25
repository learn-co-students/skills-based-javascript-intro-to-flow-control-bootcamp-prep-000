function basicTeenager(age) {
 if (12 < age && age < 20) {
   return 'You are a teenager!'
 }
   return undefined
}

function teenager(age) {
  if (12 < age && age < 20) {
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (12 < age && age < 20) {
    return 'You are a teenager!'
  }
   else if (13 > age) {
    return 'You are a kid'
   }
   else if (19 < age) {
     return 'You are a grownup'
   }
   else {
     return 'You did not enter a number'
   }
}

function ternaryTeenager(age) {
 return (12 < age && age < 20) ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
  switch (12 < age && age < 20) {
    case (true):
      return 'You are a teenager'
    default:
      return 'You have an age'
  }

}

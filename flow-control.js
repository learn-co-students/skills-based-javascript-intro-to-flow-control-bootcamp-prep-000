function basicTeenager(age) {
  if (age >= 13 && age <= 19)
  return ("You are a teenager!")
}

function teenager(age) {
  if (age >= 13 && age <= 19)
  return ("You are a teenager!")
  else (age < 13 || age > 19)
  return ("You are not a teenager")
}


function ageChecker(age) {
  if (age >= 13 && age <= 19)
  return ("You are a teenager!")
  else if (age <= 12)
  return ("You are a kid")
  else (age >= 20)
  return ("You are a grownup")
}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19) {
  return ("You are a teenager")
}
return ("You are not a teenager")
}

function switchAge(age) {
  switch (age) {
    case "13" :
      console.log (You are a teenager)
    case "14" :
      console.log (You are a teenager)
    case "15" :
      console.log (You are a teenager)
    case "16" :
      console.log (You are a teenager)
    case "17" :
      console.log (You are a teenager)
    case "18" :
      console.log (You are a teenager)
    case "19" :
      console.log (You are a teenager)
    default:
      return "You have an age"
  }
}

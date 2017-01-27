
function basicTeenager(age) {
  if (13<=age<=19) {
    return "You are a teenager!"
  } else {
    console.log("You are not a teenager")
  }
}

function teenager(age) {
  if (13<=age<=19) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {
  if (13<=age<=19 ){
    return "You are a teenager!"
  } else if (age <= 12){
    return "You are a kid"
  } else {
    return "You are a grownup"
  }

}

function ternaryTeenager(age) {
  13<=age<=19 ? return"You are a teenager" : return"You are not a teenager"

}

function switchAge(age) {
  case 13<=age<=19:
  return "You are a teenager";
  default:
  "You are not a teenager"
}


}

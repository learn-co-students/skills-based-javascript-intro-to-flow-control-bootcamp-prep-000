function basicTeenager(age) {
  if (age >= 13 && 19 >= age) {
    return "You are a teenager!"
  } else {
    return undefined
  }
};
basicTeenager(13);


function teenager(age) {
  if (age >= 13 && 19 >= age) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && 19 >= age) {
    return "You are a teenager!"

} else if (12 >= age) {
  return "You are a kid"
} else if (age >= 20) {
  return "You are a grownup"
}
}



function ternaryTeenager(age) {
  if (age >= 13 && 19 >= age) {
    return "You are a teenager"
  } else {
    return "You are not a teenager"
  }

}

function switchAge(age) {
  if (age >= 13 && 19 >= age) {
    return "You are a teenager"
  } else {
    return "You have an age"
  }

}

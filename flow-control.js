
function basicTeenager(age) {
    if (age >= 13 && age <= 19) {
      return "You are a teenager!" //return statement if between 13 and 19
    }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!" //if 13-19 true then teenager
  }
  else {
    return "You are not a teenager" //else return not teenager
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!" //if 13-19 teenager
  }
  else if (age <= 12) {
    return "You are a kid" //under 13, kid
  }
    else {
    return "You are a grownup" //above 19 grownup
  }
}

function ternaryTeenager(age) {
    return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager" //ternary statement age parameters ?  true:false
}

function switchAge(age) {
  switch (age) {
      case 13:
        return "You are a teenager"; //13
        break;
      case 14:
        return "You are a teenager"; //14
        break;
      case 15:
        return "You are a teenager"; //15
        break;
      case 16:
        return "You are a teenager"; //16
        break;
      case 17:
        return "You are a teenager";  //17
        break;
      case 18:
        return "You are a teenager"; //18
        break;
      case 19:
        return "You are a teenager"; //19
        break;
      default:
        return "You have an age"; //outside of teenager age range
      }
}

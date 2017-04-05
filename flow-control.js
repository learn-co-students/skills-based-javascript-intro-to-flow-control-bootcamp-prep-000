// if the age is between 13 and 19
function basicTeenager(age) {
  if(age>=13 && age<=19) {
      return "You are a teenager!";
  }
}

// if the age is between 13 and 19 or not in between
function teenager(age) {
  if(age>=13 && age<=19) {
      return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}

// if the age is between 13 and 19 or 12 and under or 19 and above
function ageChecker(age) {
      if(age>=13 && age<=19) {
          return "You are a teenager!";
      }
      else if(age<=12) {
              return "You are a kid";
            }
      else if(age>=19) {
              return "You are a grownup";
            }
      return "You are between 12 and 13";
}

//if statement for age between 13 to 19
function ternaryTeenager(age) {
          return age>=13 && age<=19 ?  "You are a teenager" : "You are not a teenager";
}

//swtich case for age between 13 to 19 and out baund
function switchAge(age) {
        switch (age) {
          case 13:
                return  "You are a teenager";
          case 14:
                return  "You are a teenager";
          case 15:
                return  "You are a teenager";
          case 16:
                return  "You are a teenager";
          case 17:
                return  "You are a teenager";
          case 18:
                return  "You are a teenager";
          case 19:
                return  "You are a teenager";
          default:
                return "You have an age";
        }
}

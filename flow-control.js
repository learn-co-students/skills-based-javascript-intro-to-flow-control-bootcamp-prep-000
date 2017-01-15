function basicTeenager(age) {
  if(age >= 13 && age <=19) {
  return "You are a teenager!";
  }
}
console.log(basicTeenager(19));


function teenager(age) {
  if(age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
  }
console.log(teenager(3));


function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
  }
  console.log(ageChecker(18));

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";

}
console.log(ternaryTeenager(19));

/*function switchAge(age) {
  switch(age) {
    case age >= 13 && age <= 19: // Apparently need to go case by case, not with a math function
    return "You are a teenager"
    break;
    default:
    return "You have an age"
    }
  }
console.log(switchAge(55));
console.log(switchAge(15));
console.log(switchAge(5));*/

function switchAge(age) {
 switch(age) {
   case 13:
   case 14:
   case 15:
   case 16:
   case 17:
   case 18:
   case 19:
    return 'You are a teenager';
   default:
    return 'You have an age';
 }
}

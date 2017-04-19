function basicTeenager(age) {
if((age>=13) && (age<19)) {
  console.log ("You are a teenager!");
}
}

function teenager(age) {
  if (age>=13 && age<19) {
    console.log("You are a teenager!");
    } else {
    console.log("You are not a teenager");
  }
}

function ageChecker(age) {
  if (age<=12) {
    return("You are a kid");
  } else if (age>=13 && age<19) {
    // execute this code if `conditionToTest1` statement is falsey AND `conditionToTest2` is truthy
return ("You are a teenager!");
  } else {
    // execute this code if none of the other conditions are met
return ("You are a grownup");
  }
}

function ternaryTeenager(age) {
return (age>=13 && age<19) ?  : ("You are a teenager!"):("You are not a teenager");
}

function switchAge(age) {

}

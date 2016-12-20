function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
};

function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!";
} else {
    return "You are not a teenager";
  }
};


function ageChecker(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!";
} else if (age < 13) {
    return "You are a kid";
} else {
    return "You are a grownup";
  }
};

/* Ternary Operator: shortcut for if-else statement
Syntax
    conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse
Ex:
    var grade = 85;
    console.log("You " + (grade > 50 ? "passed!" : "failed!")); */
function ternaryTeenager(age) {
  return (age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager");
};

/* Switch statements: act like a big if/else if/else chain.
   The switch expression is evaluated once and the value of
   the expression is compared with the values of each case.
Syntax
    switch (expression) {
      case n:
          // code to be executed if case n is true
          break;  // break out of switch once code executed
      case m:
          // same as above. cases repeat until finished
      default:  // all other cases
  } */
function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager"
    break;
    case 14:
      return "You are a teenager"
    break;
    case 15:
      return "You are a teenager"
    break;
    case 16:
      return "You are a teenager"
    break;
    case 17:
      return "You are a teenager"
    break;
    case 18:
      return "You are a teenager"
    break;
    case 19:
      return "You are a teenager"
    break;
    default:
      return "You have an age"
  }
};

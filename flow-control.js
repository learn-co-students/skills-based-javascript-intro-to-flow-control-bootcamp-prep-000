function basicTeenager(age) {
if (age >12 && age <20)
return ("You're a teenager!")
}

function teenager(age) {
if (age >12 && age <20)
}return ("You're a teenager!")
}
else {
return ("You're not a teenager!")
}

function ageChecker(age) {
if (age >12 && age <20)
return ("You're a teenager!")
}
else if (age <13) {
return ("You're a kid!")
}
else (age >19) {
  return ("You're a grownup!")
}

function ternaryTeenager(age) {
  (age >12 && age <20) ? ("You're a teenager!") : ("You're not a teenager!")

}

var age = switchAge(age)
switch(age) {
case "13":
console.log("You're a teenager!");
break;
case "14":
console.log("You're a teenager!");
break;
case "15":
console.log("You're a teenager!");
break;
case "16":
console.log("You're a teenager!");
break;
case "17":
console.log("You're a teenager!");
break;
case "18":
console.log("You're a teenager!");
break;
case "19":
console.log("You're a teenager!");
break;
default:
console.log("You have an age.")
}

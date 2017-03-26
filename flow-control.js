function basicTeenager(age) {
if (age >=13 && age <=19)
return "You are a teenager!"
if (age <13 || age >19)
return undefined

}

function teenager(age) {
if (age >=13 && age <=19)
return "You are a teenager!"
else (age <13 || age >19)
return "You are not a teenager"

}

function ageChecker(age) {
if (age >=13 && age <=19)
return "You are a teenager!"
else if (age <=12)
return "You are a kid"
else (age >=20)
return "You are a grownup"

}

function ternaryTeenager(age) {
return age >13 && age <=19 ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
case (age >=13 && age <=19):
  console.log("You are a teenager")
  break;
case (default):
  console.log("You are not a teenager")
  break;

}

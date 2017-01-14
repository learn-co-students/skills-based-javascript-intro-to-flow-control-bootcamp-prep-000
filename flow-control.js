function basicTeenager(age) {
if (age >= 13) {return "You are a teenager!";}
}

function teenager(age) {
  if (age > 12 && age < 20) {return "You are a teenager!";} else {return "You are not a teenager";}

}

function ageChecker(age) {
  if (age > 12 && age < 20) {return "You are a teenager!";} elseif (age < 13) {return "You are a kid";} else {return "You are a grownup";}

}

function ternaryTeenager(age) {
return (age > 12 && age < 20) "You are a teenager!" : "You are not a teenager"
}

function switchAge(age) {
switch (true)
{
  case age < 13: return "You have an age";
  case age > 19: return "You have an age";
  default: return "You are a teenager!"

}
}

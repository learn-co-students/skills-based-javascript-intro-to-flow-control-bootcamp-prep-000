
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
return ("You are a teenager!");
}
}
basicTeenager(14);



function ageChecker (age){
  if  (age <= 13 && age >=19){
  return ("You are a teenager")
}
  else if (age < 12){
    return ("You are a kid")
  }
  else if (age >20){
    return ("You are a grownup")
  }
}
ageChecker(24);

function teenager(age){
if (age >=13 && age <=20){
return("You are a teenager!")
}

else (age <13 && age >19 )
{
  return ("You are not a teenager")
}
};
teenager(14);

function ageChecker (age){
  if  (age >= 13 && age <=19){
  return ("You are a teenager")
}
  else if (age <= 12){
    return ("You are a kid")
  }
  else if (age >= 20){
    return ("You are a grownup")
  }
}
ageChecker(24);

function ternaryTeenager(age){
  return (age >=13 && age <=19 ? "teenager" : "adult")
}
ternaryTeenager(14);

var mood = "hungry"
switch(mood) {
  case "happy":
    console.log("Dance to Pharrel's Happy");
    break;
  case "sad":
    console.log("You should eat a pint of icecream");
    break;
  case "anxious":
    console.log("Take some deep breaths");
    break;
  case "hungry":
    console.log("You should eat a big chocolate cake");
    break;
  default:
    console.log("That's not a mood we support");
};

function SwitchAge(age){
switch(age){
  case 13:
  return ("You are a teenager");
  break;
  case 14:
  return ("You are a teenager");
  break;
  case 15:
  return ("You are a teenager");
  break;
  case 16:
  return ("You are a teenager");
  break;
  case 17:
  return ("You are a teenager");
  break;
  case 18:
  return ("You are a teenager");
  break;
  case 19:
  return ("You are a teenager");
  break;
}
}
SwitchAge(12);

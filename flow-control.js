function basicTeenager(age) {
   if (13 >= age <= 19){
     return "You are a teenager!"
   }
}

function teenager(age) {
  if (13 >= age <= 19){
    console.log("You are a teenager!");
    else
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (13 >= age <= 19){
    return "You are a teenager!"
  }
  else if (age < 13) {
    return "You're a kid"
  }
  else if (age > 19) {
    return "You're a grownup"
  }

}

function ternaryTeenager(age) {
  13 >= age <= 19  ? "You are a teenager" : "You are not a teenager"
}


function switchAge(age) {
  switch (age) {
   case !(13||14||15||16||17||18||19):
   console.log("You are not a teenager");
   break;
   default:
   return("You have an age");
}
basicTeenager(14);
teenager(15);
ageChecker(16);
ternaryTeenager(15);
switchAge(16);

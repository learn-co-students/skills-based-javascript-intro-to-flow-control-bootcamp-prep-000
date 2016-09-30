var age

function basicTeenager(age) {
   if (13 >= age <= 19){
    return"You are a teenager!"
  }
}
basicTeenager(13);

function teenager(age) {if (13 >= age <= 19){
    return "You are a teenager!"

  }
  else  {return "You are not a teenager"
}
}
teenager(17);
function ageChecker(age) {
  if (13 >= age <= 19){
    return "You are a teenager!"
  }
  else if (age < 13) {
    return "You're a kid";
  }
  else if (age > 19) {
    return "You're a grownup"
}
}
ageChecker(17);

function ternaryTeenager(age) { 13 >= age <= 19  ? "You are a teenager" : "You are not a teenager";

}
ternaryTeenager(18);

function switchAge(age) {

   case age != 13||14||15||16||17||18||19 :
   return "You are not a teenager";
   break;
   default:
   return"You have an age";

}
ternaryTeenager(18);

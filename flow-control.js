function basicTeenager(age) {
if(13<age<19){console.log("You are a teenager!")}

}

function teenager(age) { if (13<age<19){console.log("You are a teenager!")}
 else {"You are not a teenager!S"}

}

function ageChecker(age) {
  if(13<age<19) {console.log("You are a teenager!")}
  elseif(age<12){console.log("You are a kid")}
  else {console.log("You are a grownup")}
}

function ternaryTeenager(age) {return 13<age<19? "You are a teenager!": "You are not a teenager"

}

function switchAge(age) {
switch(age){case "13,14,15,16,17,18,19":
  return "You are a teenager"
  default:
  return "You have an age"}
}

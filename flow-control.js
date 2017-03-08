age = 14
function basicTeenager(age){
  if(age>=13 && age<=19){
    console.log('You are a teenager!');
    }
  }

function teenager(age) {
  if(age>=13 && age<=19){
    console.log("You are a teenager!");
  }else{
    console.log("You are not a teenager");
  }
}

function ageChecker(age) {
  if (age>=13 && age <=19){
    console.log("You are a teenager!");
  }else if (age>19) {
    console.log('You are an adult');
  }else {
    console.log("You are a kid");

  }
}

function ternaryTeenager(age) {
return
 age>=13 && age<= 19 ? "You are a teenager!" : "You are not a teenager"
}


function switchAge(age) {
  case age>=13 && <= 19:
    console.log("You are a teenager!");
    break;
  case age>19:
    console.log("You are an adult");
    break;
  default:
    console.log("You are a kid");
}

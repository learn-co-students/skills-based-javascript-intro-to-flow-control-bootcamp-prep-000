function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
 		    return "You are a teenager!"
		  };

};

function teenager(age) {
  if (age >= 13 && age <= 19) {
 		    return "You are a teenager!"
 		  }
 		  else {
 		    return "You are not a teenager"
 		  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
		    return "You are a teenager!";
 		  }
 	elseif (age < 13){
 		    return "You are a kid";
 		  }
 	elseif (age > 19){
 		    return "You are a grownup";
 		  }
        else {
        undefined
}

}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
 		   }



function switchAge(age) {
  case 13:
    console.log("You are a teenager");
    break;
  case 14:
  console.log("You are a teenager");
  break;
  case 15:
  console.log("You are a teenager");
  break;
  case 16:
  console.log("You are a teenager");
  break;
  case 17:
  console.log("You are a teenager");
  break;
  case 18:
  console.log("You are a teenager");
  break;
  case 19:
  console.log("You are a teenager");
  break;
  default:
    return ('You have an age');};
}

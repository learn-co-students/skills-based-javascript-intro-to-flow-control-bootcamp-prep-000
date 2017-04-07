function basicTeenager(age) {
  if (age >= 13 && age <=19){
    return 'You are a teenager!'}

}

function teenager(age) {
  if (age >= 13 && age <=19){
    answer = 'You are a teenager!'}
  else {answer = 'You are not a teenager'}
return(answer)
}

function ageChecker(age) {
  if (age < 13){answer = 'You are a kid' }
  		else if (age >= 13 && age <=19){answer = 'You are a teenager!'}
  		else if (age > 19) {answer = 'You are a grownup'}
  	return(answer)
}

function ternaryTeenager(age) {
  return age >= 13 && age <=19 ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
  switch(age) {
     case 13:
  	answer = 'you are a teenager';
  	break;
  case 14:
  	answer = 'you are a teenager';
  	break;
  case 15:
  	answer = 'You are a teenager';
  	break;
    case 16:
    	answer = 'You are a teenager';
    	break;
    case 17:
      answer = 'You are a teenager';
      break;
    case 18:
      answer = 'You are a teenager';
      break;
    case 19:
      answer = 'You are a teenager';
      break;
   default:
  	answer = 'You have an age';
  }
  return answer
}

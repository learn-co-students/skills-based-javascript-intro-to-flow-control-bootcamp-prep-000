

function teenager(age) {
  if (age > 12 && age < 20){
    return 'You are a teenager!';
  }else{
    return 'You are not a teenager';
  }
}

function basicTeenager(age) {
  if (age < 13){
    return 'You are not a teenager';
  } if (age < 20){
    return 'You are a teenager';
  }else{
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (age < 13){
    return 'You are a kid';
  }else if (age < 20){
    return 'You are a teenager!';
  }
  return 'You are a grownup';
}
// function terneryTeenager(age){
// return  (age > 12 && age < 20) ? 'You are a teenager' : 'You are not a teenager';
// }
//
// result = terneryTeenager(12);
// console.log(result)
//
// function

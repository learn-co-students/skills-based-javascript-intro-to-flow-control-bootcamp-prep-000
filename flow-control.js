function basicTeenager(age){
  if (age>12 && age<20) {
    return `You are a teenager!`
    }

}

function teenager(age) {
  if(age<12&&20>age){
  console.log("You are a teenager!")
}else{
  return `You are not a teenager`
}
}

function ageChecker(age) {
  if(age>12&&age<20){
    console.log("You are a teenager!")
  }else if(age<13){
    console.log("You are a child")
  }else{
    return`You are a grownup`
  }


}

function ternaryTeenager(age) {
  return if(age>12&&20>age) `You are a teenager!`:`You are not a teenager`
}

function switchAge(age) {

}

function basicTeenager(age) {if (age >= 13 && age <=19){return "You are a teenager!"}
}

function teenager(age) {if (age >= 13 && age <=19) {return "You are a teenager!"} 
else {return "You are not a Teenager!"}
}

function ageChecker(age) {if (age >=13 && age<=19) {return "You are a teenager!"}
else if (age <=12) {return "you are a kid!"} {return"you are a grownup"}
}

function ternaryTeenager(age) {if (age>=13 && age<=19)?
 "You are a teenager":"You are not a teenager"}

function switchAge(age) {switch (age) 
{case (if(age >=13 && age <=19)): console.log("You are a teenager") 
default: console.log ("you are a number") break}
}

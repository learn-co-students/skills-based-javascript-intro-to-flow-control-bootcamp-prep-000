function basicTeenager(age){
   if(age>=13 && age=<19) {console.log(""You are a teenager!"")
}
}

function teenager(age) {
  if(age>=13 && age<=19) {console.log(""You are a teenager!"")
}
else{console.log(""You are not a teenager"")
}
}

function ageChecker(age) {
  if (age>=13 && age<=19)) {console.log(""You are a teenager!"")}
  else if (age<13)        {console.log(""You are a kid"")}
  else(age>19)             {console.log(""You are a grownup"")}

}

function ternaryTeenager(age) {
( age>=13 && age<=19)?    "You are a teenager": "You are not a teenager"

}

function switchAge(age) {
  switch(age) {
    case "13":
    return ""You are a teenager""
    case "14":
    return ""You are a teenager""
    case "15":
    return ""You are a teenager""
    case "16":
    return ""You are a teenager""
    case "17":
    return ""You are a teenager""
    case "18":
    return ""You are a teenager""
    case "19":
    return ""You are a teenager""
    default:
    return ""You have an age""
}
}

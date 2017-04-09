"use strict";
function basicTeenager(age) {
    if (age >= 13 && age <= 19) {
        return "You are a teenager!";
    }
}

"use strict";
function teenager(age) {
    if (12 < age && age <= 19) {
        return "You are a teenager!";
    } else {
        return "You are not a teenager";
    }
}

"use strict";
function ageChecker(age) {
    if (12 < age && age < 20) {
        return "You are a teenager!";
    } else if (age < 13) {
        return "You are a kid";
    } else {
        return "You are a grownup";
    }
}

"use strict";
function ternaryTeenager(age) {
    return (age > 12 && age < 20)
        ? "You are a teenager"
        : "You are not a teenager";
}

"use strict";
function switchAge(age) {
    switch (age) {
    case 13:
        return "You are a teenager";
    case 14:
        return "You are a teenager";
    case 15:
        return "You are a teenager";
    case 16:
        return "You are a teenager";
    case 17:
        return "You are a teenager";
    case 18:
        return "You are a teenager";
    case 19:
        return "You are a teenager";
    default:
        return ("You have an age");
    }
}

/*"use strict";
var age = "16"
function switchAge(age) {
    switch (age) {
    case "13":
        console.log("You are a teenager");
        break;
    case "14":
        console.log("You are a teenager");
        break;
    case "15":
        console.log("You are a teenager");
        break;
    case "16":
        console.log("You are a teenager");
        break;
    case "17":
        console.log("You are a teenager");
        break;
    case "18":
        console.log("You are a teenager");
        break;
    case "19":
        console.log("You are a teenager");
        break;
    default:
        return ("You have an age");
    }
}
*/
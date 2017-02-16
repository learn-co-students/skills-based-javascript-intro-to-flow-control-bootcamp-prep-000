function basicTeenager(age) {
    if (age>=13 && age<=19){
        return 'You are a teenager!';
    }
}

function teenager(age) {
    if (age>=13 && age<=19){
        return 'You are a teenager!';
    } else {
        return  'You are not a teenager';
    }

}

function ageChecker(age) {
    if (age>=13 && age<=19){
        return 'You are a teenager!';
    } else if (age<13) {
        return 'You are a kid';
    } else {
        return  'You are a grownup';
    }

}

function ternaryTeenager(age) {
    return (age>=13 && age<=19) ? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(age) {
    var result = '';
    switch (age) {
        case 13:
            result = 'You are a teenager';
            break;
        case 14:
            result = 'You are a teenager';
            break;
        case 15:
            result = 'You are a teenager';
            break;
        case 16:
            result = 'You are a teenager';
            break;
        case 17:
            result = 'You are a teenager';
            break;
        case 18:
            result = 'You are a teenager';
            break;
        case 19:
            result = 'You are a teenager';
            break;
        default:
            result = 'You have an age';
    }
    return result;
}

var basicTeenager = function(age) {
    if (age >= 13 && age <= 19) {
        return 'You are a teenager!';
    } else {
        return undefined;
    }
};

var teenager = function(age) {
    if (age >= 13 && age <= 19) {
        return 'You are a teenager!';
    } else {
        return 'You are not a teenager';
    }
};

var ageChecker = function(age) {
    if (age >= 13 && age <= 19) {
        return 'You are a teenager!';
    } else if (age <= 12) {
        return 'You are a kid';
    } else {
        return 'You are a grownup';
    }
};

var ternaryTeenager = function(age) {
    return age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager';
};

var switchAge = function(age) {
    switch (age >= 13 && age <= 19) {
        case true:
            return 'You are a teenager';
        case false:
            return 'You are not a teenager';
        default:
            return 'You have an age';
    }
};

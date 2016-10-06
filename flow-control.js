
function basicTeenager(age) {
if (age <=19 && age >= 13) {
	return "You are a teenager!";
}
}
basicTeenager(14);


function teenager(age) {
	if (age <= 19 && age >= 13) {
		return "You are a teenager!";
	}
	else {
		return "You are not a teenager";
	}
}
teenager(20);

function ageChecker (age) {
	if ( age <= 19 && age >=13 ) {
		return "You are a teenager!";
	}

	else if ( 12 >=age ) {
		return "You are a kid";
	}
	else {
		return "You are a grownup";
	}
}
ageChecker(20);
var age = 30;
function ternaryTeenager (age) {
	return  (age<=19 && age>=13? "You are a teenager" : "You are not a teenager");
}

function switchAge (age){
	switch (age) {
		case 13:
		return "You are a teenager";
		break;

		case 14:
		return "You are a teenager";
		break;

		case 15:
		return "You are a teenager";
		break;

		case 16:
		return "You are a teenager";
		break;

		case 17:
		return "You are a teenager";
		break;

		case 18:
		return "You are a teenager";
		break;

		case 19:
		return "You are a teenager";
		break;

		default:
		return "You have an age";

	}

}

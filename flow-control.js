

var teenager = function(age){
if (13<=age && age<=19) {
    return 'You are a teenager!'}
else if (age<12) {
	return 'You are a kid!'}
else {
	return 'You are a grownup!'}
};

teenager(69);




var ternaryTeenager = function(age) {
return age>=13 && age<=19 ? 'teenager!' : 'older/younger person'}

ternaryTeenager(9)

var switchage = function(age){
	switch(age) {
		case(13<=age && age<=19):
      console.log('you are a teenager')
			break;
    default:
			console.log('you have an age')
			break;
              }};
switchage(19)

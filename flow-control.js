function basicTeenager(age) {
var name = 'You are a teenager!';

  if (age>=13 && age<=19) 

     {
  return(name);
     }
  return undefined;
                            }


function teenager(age)        {

  var name = 'You are a teenager!';
  var n = 'You are not a teenager';
  if (age>=13 && age<=19){
    
    return(name);
                         }
    else{
      
      return(n);
        }
                              }
function ageChecker(age) {
  
  var name = 'You are a teenager!';
  var n = 'You are a kid';
  var m = 'You are a grownup';
  if (age>=13 && age<=19){
    
    return(name);
                         }
    else if(age<13){
      
      return(n);
                  }
        else{

          return(m)
          
            }
                         }

function ternaryTeenager(age)                        {
  var n = 'You are a teenager';
  var m = 'You are not a teenager';
      
      return age>=13 && age<=19 ? n : m 

                                                     }

function switchAge(age)                         {

  switch(age) {
    case 13:
      return "You are a teenager"
    
    case 14:
      return "You are a teenager"
      
    case 15:
      return "You are a teenager"
      
    case 16:
      return "You are a teenager"
      
    case 17:
      return "You are a teenager"
      
    case 18:
      return "You are a teenager"
      
    case 19:
      return "You are a teenager"
  
    default:
      return "You have an age"
}



                                                }

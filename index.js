function scuberGreetingForFeet(x) {
  // Write your code here!
  if (x <= 400) {
    return "This one is on me!";
  } else if (x > 2000 && x < 2500) {
    return "I will gladly take your thirty bucks.";
  } else return "No can do.";
}

function ternaryCheckCity(city) {
  // Write your code here!
return city == "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
switch (tip){
  case 'generous' : 
return 'Thank you so much.';
  case 'not as generous':
return 'Thank you.'
default : 'thanks for everything'
return 'Bye.'
}
}

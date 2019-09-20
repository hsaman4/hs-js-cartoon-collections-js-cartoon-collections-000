function dwarfRollCall(dwarves) {
  var thing = '';
 for (var i = 0; i < dwarves.length; i++){
 thing +=`${[i+1]}. ${dwarves[i]} `;
  }
 return thing ;
  //return string with the numbered dwarves.
}
function summonCaptainPlanet(planeteerCalls){
  var one = [];
  for (var i = 0; i < planeteerCalls.length; i++){
   one.push(planeteerCalls[i].toUpperCase() + "!");
  }
   return one;
//convert each element to uppercase
// add ! at the end 
}
function longPlaneteerCalls(words) {
  for (var i=0; words.length; i++){
    if (words.length > 4){
    return true;}
    else {return false}
  }

}
//should tell us if the calls is longer than 4 characters
function findTheCheese (foods) {
 for (var i=0; foods.length; i++){
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert') {
      return foods[i];
    }
 }
return "no cheese!"
}

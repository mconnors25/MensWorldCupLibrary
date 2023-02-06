var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/FIFA%20Men's%20World%20Cup%20Results.csv";
var edition = getColumn(url, 1);
var year = getColumn(url, 2);
var hosts = getColumn(url, 3);
var champions = getColumn(url, 4);
var finalScore = getColumn(url, 5);
var venue = getColumn(url, 6);
var runnersUp = getColumn(url, 7);
var thirdPlace = getColumn(url, 8);
var fourthPlace = getColumn(url, 9);
var numParticipants = getColumn(url, 10);

// this function uses a year that a world cup was in, and then prints the host country that the World Cup took place in. 
//the parameter is the year of a world cup, if there isn't a valid year entered, or no year at all, then the output will print "Please type in a valid year"
// years {number} - the year that a specific World Cup took place
// function returns host {string} - the host country of the World Cup of that year with those champion
function getHost(years){
  var year = getColumn(url, 2);
  var match = [];
  
for (var i = 0; i<year.length; i++) {
  if (year[i] == years){
    var output = "The Host of This FIFA World Cup Was: " + hosts[i];
    return output;
  }
  }
  return "Please type in a valid year";
}
console.log(getHost(2026));


// This function takes the parameters of a champion of the World Cup and what year they won, and returns the people they won against when that game took place. 
//champions {string} - the country that won the World Cup
// years {number} - the year that a specific World Cup took place
// function returns the runnners up {string} - the runners up(2nd place) of the World Cup of that year with those champion
function getRunnersUp(champions, years){
  var runnersUp = getColumn(url, 7);
  var champion = getColumn(url, 4);
  var year = getColumn(url, 2);

for (var i = 0; i<champion.length; i++) {
  if ((champion[i].toLowerCase() == champions.toLowerCase()) && (year[i] == years)){
   var output = "The Runner Up For This World Cup Is: " + runnersUp[i]; 
    return output;
  
  }
  
}
  return "Please enter a correct year that corresponds with the champions or a correct champion that corresponds with the year";
}
console.log(getRunnersUp("France",1998));

//this function takes the parameter of the host of the World Cup and returns the venue where the final game was held in that country.
// hosts {string} - the host country of each World cup
// the function returns the variable venue {string} - the stadium that the host country hosted the final match in
function getStadiums(host) {
var hosts = getColumn(url, 3);
var venue = getColumn(url, 6);
var year = getColumn(url, 2);
  
var match = [];
  
for (var i = 0; i<hosts.length; i++) {
  if (hosts[i].toLowerCase() == host.toLowerCase()) {

    match.push("This Country's Final Game Stadium is: " + venue[i] + " In The Year: " + year[i]);

  }
    }
  if (match.length == 0) {
    return "Please type in a valid host country";
  }
  return match;
  

  
}
console.log(getStadiums("United states"));

// this function takes the parameter of the year of teh World Cup and returns the final score of that Cup's final game
// year {number} - the year that a World Cup took place
// the function returns the final score {number string??} - the final score of the championship game
function getScore(years) {
var year = getColumn(url, 2); 
var finalScore = getColumn(url, 5);

  if (years == 2026 || years == 2022) {
    return "These final scores are not yet identified";
  }
  
for (var i =0; i<year.length; i++) {
  if (year[i] == years) {
   var output = "The Score of This Final Game Was: " + finalScore[i];
    return output;
  }
}
  return "Please enter a valid World Cup year";
}
console.log(getScore(2002));

//This function takes the parameter of each edition of a world cupp and return the top three teams of that year
// edition {number} - the number of eac  World Cup
// the function returns the champions, runners up, and third place countries of that specific World Cup, all are string variables
function getTopThree(editions) {
var edition = getColumn(url, 1);
var champions = getColumn(url, 4);
var thirdPlace = getColumn(url, 8);
var runnersUp = getColumn(url, 7);

if (editions == 23 || editions == 22) {
    return "These teams are not yet identified";
  }

for (var i = 0; i<edition.length; i++) {
  
 if (edition[i] == editions) {
  var output = "The Rankings for This FIFA World Cup Is: " + champions[i] + " = 1st, " + runnersUp[i]+ " = 2nd, " + thirdPlace[i] + " = 3rd";
   return output;  
} 

}
   return "Please enter a valid World Cup edition number";
}
console.log(getTopThree(23)); 
//Global Variables
var currLoc = 0;  
var score = 0; 
      
//Variables for Scorekeeping
var visited_0  = false;
var visited_1  = false;
var visited_2  = false;
var visited_3  = false;
var visited_4  = false;
var visited_5  = false;
var visited_6  = false;
var visited_7  = false;
var visited_8  = false;
var visited_9  = false;
var visited_10 = false;
var visited_11 = false;

//Initialization
function init(){
   look();
}

//Directional Functions
function goNorth(){                
   if(currLoc===3){
      currLoc=0;
      look();
   } else {
     if(currLoc===0){
        currLoc = 1;
        look();
     } else {
       if(currLoc===5){
          currLoc = 4;
          look();
       } else {
         if(currLoc===1){
            currLoc = 6;
            look();
         } else {
           if(currLoc===8){
              currLoc = 9;
              look();
           } else {
             if(currLoc===11){
                currLoc = 10;
                look();
             } else {
              navigationError();
             }
           }
         }
       }
     }
   }
}

function goSouth(){                
   if(currLoc===1){
      currLoc=0;
      look();
   } else {
     if(currLoc===0){
        currLoc = 3;
        look();
     } else {
       if(currLoc===4){
          currLoc = 5;
          look();
       } else {
         if(currLoc===6){
            currLoc = 1;
            look();
         } else {
           if(currLoc===9){
              currLoc = 8;
              look();
           } else {
             if(currLoc===10){
                currLoc = 11;
                look();
             } else {
              navigationError();
             }
           }
         }
       }
     }
   }
}

function goEast(){                
   if(currLoc===2){
      currLoc=0;
      look();
   } else {
     if(currLoc===0){
        currLoc = 4;
        look();
     } else {
       if(currLoc===3){
          currLoc = 5;
          look();
       } else {
         if(currLoc===7){
            currLoc = 6;
            look();
         } else {
           if(currLoc===6){
              currLoc = 8;
              look();
           } else {
             if(currLoc===8){
                currLoc = 10;
                look();
             } else {
              navigationError();
             }
           }
         }
       }
     }
   }
}

function goWest(){                
   if(currLoc===4){
      currLoc=0;
      look();
   } else {
     if(currLoc===0){
        currLoc = 2;
        look();
     } else {
       if(currLoc===5){
          currLoc = 3;
          look();
       } else {
         if(currLoc===10){
            currLoc = 8;
            look();
         } else {
           if(currLoc===8){
              currLoc = 6;
              look();
           } else {
             if(currLoc===6){
                currLoc = 7;
                look();
             } else {
              navigationError();
             }
           }
         }
       }
     }
   }
}

//Commandbox Directional Functions
function btnGo_click(){
   var userDirection = document.getElementById("txtCommand").value;
   userDirection = userDirection.trim();
   userDirection = userDirection.toUpperCase();
   switch(userDirection){
      case 'N': goNorth();
           break;
      case 'S': goSouth();
           break;
      case 'E': goEast();
           break;
      case 'W': goWest();
           break;  
      case 'Help': dispmsg("You cannot use that command. You may only use: N, S, E, or W.");
           break;
      default: dispmsg("You cannot use that command. You may only use: N, S, E, or W.");
   }   
}

//Story Functions
function look(){ 
   var desc = "";
   switch(currLoc) {
      case 0:  desc  = spaceStation();  break;
      case 1:  desc  = icePlanet();     break;
      case 2:  desc  = waterPlanet();   break;
      case 3:  desc  = firePlanet();    break;
      case 4:  desc  = junglePlanet();  break;
      case 5:  desc  = cloudPlanet();   break;
      case 6:  desc  = diamondPlanet(); break;
      case 7:  desc  = desertPlanet();  break;
      case 8:  desc  = asteroidBelt();  break;
      case 9:  desc  = metalPlanet();   break;
      case 10: desc  = gravityPlanet(); break;
      case 11: desc  = earthPlanet();   break; 
      default: desc  = "This part of space is not yet explorable.";
   }
}

function spaceStation(){
   var desc = "You are back in the space station.";
   completeScore();
   dispmsg(desc);
}

function icePlanet(){
   var desc = "You have traveled to the snow and ice covered planet of Skadi. You get out of the space ship only to discover that the planet is freezing and uninhabitable.";
   completeScore();
   dispmsg(desc);
}

function waterPlanet(){
   var desc = "You have treked to the water planet of Kanaloa. You land your ship upon the water and look around. There seems to be no intelligent life here, only sea creatures interested in you and your ship. Sadly their curiosity is harmful, leave before any damage occurs!";
   completeScore();
   dispmsg(desc);
} 

function firePlanet(){
   var desc = "You have voyaged to the fire planet called Hell. The beings on this planet are dangerous and angry, get out quick! Before they ignite you and your spaceship. ";
   completeScore();
   dispmsg(desc);
}

function junglePlanet(){
   var desc = "You have traveled to the jungle planet of Pluvia Silva. The people there are friendly and offer for you to stay there forever...";
   completeScore(); 
   dispmsg(desc);      
}
  
function cloudPlanet(){
   var desc = "You have soared to the planet of nebulous. This planet is known for having little to no land mass, only clouds of diffenrent structures. Sadly you cannot land your ship and must move on.";
   completeScore();
   dispmsg(desc);
}

function diamondPlanet(){
   var desc = "You have treked to the planet known as Diamanti. This planet is known to all due to the entire surface of the planet being made up of diamonds. You explore for a while but get back in your ship with the feeling of something watching your every move...";
   completeScore();
   dispmsg(desc);
}

function desertPlanet(){
   var desc = "You have voyaged to the hot and sandy planet of Arrakis. This desert planet seems to be barren and just bearably hot, but the longer you stay to explore the more hidden creatures you find...until there are thousands of them.";
   completeScore();
   dispmsg(desc);
}

function asteroidBelt(){
   var desc = "You have unexpectedly encountered the Attarii Asteroid Belt! You and your ship barely make it through in one piece!";
   completeScore();
   dispmsg(desc);
}

function metalPlanet(){
   var desc = "You have made it out of the Attarii Belt with slight damage to your ship! Luckly you landed on the Planet Ore. Ore is an all metal planet that is used by many to supply their planets with metal. You fix your ship and head off once more.";
   completeScore();
   dispmsg(desc);
}

function gravityPlanet(){
   var desc = "You have made it out of the Attarii Belt unscathed and found the Planet Perfusorius. You try to land your ship but you are having a lot of difficulty considering Perfusorius has little to no gravity. You eventually just decide to move on.";
   completeScore();
   dispmsg(desc);
}

function earthPlanet(){
   var desc = "You have soared to an unknown planet that is very similar to the planet Earth. You are the first to discover this new planet!";
   completeScore();
   dispmsg(desc);
}

function navigationError(){
   dispmsg("This part of space is not yet explorable.");
}

function completeScore(){
   var targetScoreArea = document.getElementById("scoreArea");
   targetScoreArea.value = score;
   if ((! visited_0) && (currLoc === 0)){
       score = score + 5;
       visited_0 = true;
   } else if ((! visited_1) && (currLoc === 1)) {
       score = score + 5;
       visited_1 = true;
   } else if ((! visited_2) && (currLoc === 2)) {
       score = score + 5;
       visited_2 = true;
   } else if ((! visited_3) && (currLoc === 3)) {
       score = score + 5;
       visited_3 = true;
   } else if ((! visited_4) && (currLoc === 4)) {
       score = score + 5;
       visited_4 = true;
   } else if ((! visited_5) && (currLoc === 5)) {
       score = score + 5;
       visited_5 = true;
   } else if ((! visited_6) && (currLoc === 6)) {
       score = score + 5;
       visited_6 = true;
   } else if ((! visited_7) && (currLoc === 7)) {
       score = score + 5;
       visited_7 = true;
   } else if ((! visited_8) && (currLoc === 8)) {
       score = score + 5;
       visited_8 = true;
   } else if ((! visited_9) && (currLoc === 9)) {
       score = score + 5;
       visited_9 = true;
   } else if ((! visited_10) && (currLoc === 10)) {
       score = score + 5;
       visited_10 = true;
   } else if ((! visited_11) && (currLoc === 11)) {
       score = score + 5;
       visited_11 = true;
   }
}

//Utility functions
function dispmsg(msg){
   var target = document.getElementById("taMain");
   target.value = msg +"\n\n" + target.value;
}  

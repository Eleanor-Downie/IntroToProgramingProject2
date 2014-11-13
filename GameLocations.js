function spaceStation(){ 
   var desc = "You have taken your ship to the space station.";
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
   var desc = "You have voyaged to the fire planet called Hell. The beings on this planet are dangerous and angry, get the hell out of dodge! Before they ignite you and your spaceship. ";
   completeScore();
   dispmsg(desc);
}

function junglePlanet(){
   var desc = "You have traveled to the jungle planet of Pluvia Silva. The people there are friendly and offer for you to stay there forever...";
   completeScore(); 
   dispmsg(desc);      
}
	  
function cloudPlanet(){
   if(taken_shield === false){
   var desc = "You have soared to the planet of Nebulous. This planet is known for having little to no land mass, only clouds of diffenrent structures. Sadly you cannot land your ship and must move on. But before you leave you see an Asteroid Shield floating in the air.";
   } else {
	  var desc = "You have soared to the planet of Nebulous. This planet is known for having little to no land mass, only clouds of diffenrent structures. Sadly you cannot land your ship and must move on.";
	}
	completeScore();
	dispmsg(desc);
}

function diamondPlanet(){
   var desc = "You have treked to the planet known as Diamanti. This planet is known to all due to the entire surface of the planet being made up of diamonds. You explore for a while but get back in your ship with the feeling of something watching your every move...";
   completeScore();
   dispmsg(desc);
}

function desertPlanet(){
   if(taken_phaser === false){
   var desc = "You have voyaged to the hot and sandy planet of Arrakis. This desert planet seems to be barren and just bearably hot, but the longer you stay to explore the more hidden creatures you find...until there are thousands of them. As you are leaving you see a phaser laying on the ground, possibly from the last explorer that was here...";
   } else {
	  var desc = "You have voyaged to the hot and sandy planet of Arrakis. This desert planet seems to be barren and just bearably hot, but the longer you stay to explore the more hidden creatures you find...until there are thousands of them.";  
    }   
	completeScore();
	dispmsg(desc);
}

function asteroidBelt(){
   var desc = "You have unexpectedly encountered the Attarii Asteroid Belt! You and your ship barely make it through in one piece!";
   completeScore();
   dispmsg(desc);
}

function metalPlanet(){
   if(taken_gravityDevice === false){
   var desc = "You have made it out of the Attarii Belt with slight damage to your ship! Luckly you landed on the Planet Ore. Ore is an all metal planet that is used by many to supply their planets with metal. You fix your ship and head off once more. As you are leaving you see a vendor giving out Artificial Gravity Devices, they offer you one.";
   } else {
      var desc = "You have made it out of the Attarii Belt with slight damage to your ship! Luckly you landed on the Planet Ore. Ore is an all metal planet that is used by many to supply their planets with metal. You fix your ship and head off once more.";
    }
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
function Location (id, name, description, hasItem) {
   //Class Attributes
   this.id = id;
   this.name = name;
   this.description = description;
   this.hasItem = hasItem;
}


var spaceStation = new Location();
   spaceStation.id = 0;
   spaceStation.name = "Space Station";
   spaceStation.description = "You have taken your ship to the space station.";
   spaceStation.hasItem = false;

var icePlanet = new Location();
   icePlanet.id = 1;
   icePlanet.name = "Skadi";
   icePlanet.description = "You have traveled to the snow and ice covered planet of Skadi. You get out of the space ship only to discover that the planet is freezing and uninhabitable.";
   icePlanet.hasItem = false;

var waterPlanet = new Location();
   waterPlanet.id = 2;
   waterPlanet.name = "Kanaloa";
   waterPlanet.description = "You have treked to the water planet of Kanaloa. You land your ship upon the water and look around. There seems to be no intelligent life here, only sea creatures interested in you and your ship. Sadly their curiosity is harmful, leave before any damage occurs!";
   waterPlanet.hasItem = false;

var firePlanet = new Location();
   firePlanet.id = 3;
   firePlanet.name = "Hell";
   firePlanet.description = "You have voyaged to the fire planet called Hell. The beings on this planet are dangerous and angry, get the hell out of dodge! Before they ignite you and your spaceship. ";
   firePlanet.hasItem = false;

var junglePlanet = new Location();
   junglePlanet.id = 4;
   junglePlanet.name = "Pluvia Silva";
   junglePlanet.description = "You have traveled to the jungle planet of Pluvia Silva. The people there are friendly and offer for you to stay there forever...";
   junglePlanet.hasItem = false;

var cloudPlanet = new Location();
   cloudPlanet.id = 5;
   cloudPlanet.name = "Nebulous";
   cloudPlanet.descripition = "You have soared to the planet of Nebulous. This planet is known for having little to no land mass, only clouds of diffenrent structures. Sadly you cannot land your ship and must move on. But before you leave you see an Asteroid Shield floating in the air.";
   cloudPlanet.hasItem = true;

var diamondPlanet = new Location();
   diamondPlanet.id = 6;
   diamondPlanet.name = "Diamanti";
   diamondPlanet.description = "You have treked to the planet known as Diamanti. This planet is known to all due to the entire surface of the planet being made up of diamonds. You explore for a while but get back in your ship with the feeling of something watching your every move...";
   diamondPlanet.hasItem = false;

var desertPlanet = new Location();
   desertPlanet.id = 7;
   desertPlanet.name = "Arrakis";
   desertPlanet.description = "You have voyaged to the hot and sandy planet of Arrakis. This desert planet seems to be barren and just bearably hot, but the longer you stay to explore the more hidden creatures you find...until there are thousands of them. As you are leaving you see a phaser laying on the ground, possibly from the last explorer that was here...";
   desertPlanet.hasItem = true;
   
var asteroidBelt = new Location();
   asteroidBelt.id = 8;
   asteroidBelt.name = "Attarii Asteroid Belt";
   asteroidBelt.description = "You have unexpectedly encountered the Attarii Asteroid Belt! You and your ship barely make it through in one piece!";
   asteroidBelt.hasItem = false;

var metalPlanet = new Location();
   metalPlanet.id = 9;
   metalPlanet.name = "Ore";
   metalPlanet.description = "You have made it out of the Attarii Belt with slight damage to your ship! Luckly you landed on the Planet Ore. Ore is an all metal planet that is used by many to supply their planets with metal. You fix your ship and head off once more. As you are leaving you see a vendor giving out Artificial Gravity Devices, they offer you one.";
   metalPlanet.hasItem = true;

var gravityPlanet = new Location();
   gravityPlanet.id = 10;
   gravityPlanet.name = "Perfusorius";
   gravityPlanet.description = "You have made it out of the Attarii Belt unscathed and found the Planet Perfusorius. You try to land your ship but you are having a lot of difficulty considering Perfusorius has little to no gravity. You eventually just decide to move on.";
   gravityPlanet.hasItem = false;

var earthPlanet = new Location();
   earthPlanet.id = 11;
   earthPlanet.name = "Unknown"
   earthPlanet.description = "You have soared to an unknown planet that is very similar to the planet Earth. You are the first to discover this new planet!";
   earthPlanet.hasItem = false;




	  
	  //var desc = "You have soared to the planet of Nebulous. This planet is known for having little to no land mass, only clouds of diffenrent structures. Sadly you cannot land your ship and must move on.";

	  //var desc = "You have voyaged to the hot and sandy planet of Arrakis. This desert planet seems to be barren and just bearably hot, but the longer you stay to explore the more hidden creatures you find...until there are thousands of them.";  

      //var desc = "You have made it out of the Attarii Belt with slight damage to your ship! Luckly you landed on the Planet Ore. Ore is an all metal planet that is used by many to supply their planets with metal. You fix your ship and head off once more.";


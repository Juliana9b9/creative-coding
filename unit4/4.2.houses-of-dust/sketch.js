let poem = ''; 

let grammar = tracery.createGrammar(
  //17, 26, 4, 22

  //This list chooses random words to use for house of ...
  {
  "material": [
  "GLASS",
  "DIAMOND",
  "SOIL",
  "BONE",
  "SKIN",
  "WATER",
  "WOOL",
  "CLAY",
  "CANDY",
  "SUGAR",
  "STEEL",
  "EMERALD",
  "KEVLAR",
  "RICE",
  "GRASS",
  "CARPET",
  "POLYESTER", 
  ],
  "place":[
  "PARIS",
  "TOKYO",
  "ROME",
  "NEW YORK CITY",
  "LONDON",
  "BERLIN",
  "DUBAI",
  "BRAZIL",
  "PERU",
  "SPAIN",
  "ICELAND",
  "LOS ANGELES",
  "SYDNEY",
  "EGYPT",
  "QUEBEC",
  "BALI",
  "ANTARCTICA",
  "COLORADO",
  "MALDIVES",
  "A GARAGE",
  "A BASEMENT",
  "MARS",
  "MERCURY",
  "VENUS",
    ], 
  "light_source":[
  "THE SUN",
  "THE MOON",
  "FIRE",
  "LIGHTNING",
  "A LIGHTER",
  "LED LIGHTS",
    ], 
  "inhabitants": [
  "CLOWNS",
  "ATHLETES",
  "ARTISTS",
  "SINGERS",
  "WRITERS",
  "POETS",
  "CATS",
  "REBELLS",
  "ROYALS",
  "GENERALS",
  "DANCERS",
  "PEACEMAKERS",
  "TRICKSTERS",
  "MONSTERS",
  "COWS",
  "SNAKES",
  "BEETLES",
  "BUTTERFLIES",
  "FISH",
  "BABIES",
  "FLIES",
  "MOTHS",
    ],
  "origin": "A HOUSE OF #material#\nIN #place#\nUSING #light_source#\nINHABITED BY #inhabitants#"
});
// use \n for line breaks
//set frame rate to 1 
poem = grammar.flatten('#origin#');

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(254,249,231);

  textSize(40);
  textFont("Times New Roman")
  text(poem, 50, 70);
}
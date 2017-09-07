var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_array = [
	{
		"title": "James Baldwin",
		"image": "./images/jamesbaldwin.jpg"
	},
	{
		"title": "James Baldwin",
		"image": "./images/jamesbaldwin.jpg"
	},
	{
		"title": "Langston Hughes",
		"image": "./images/langstonhughes.jpg"
	},
	{
		"title": "Langston Hughes",
		"image": "./images/langstonhughes.jpg"
	},
	{
		"title": "Jack Johnson",
		"image": "./images/jackjohnson.jpg"
	},
	{
		"title": "Jack Johnson",
		"image": "./images/jackjohnson.jpg"
	},
	{
		"title": "W.E.B. Dubois",
		"image": "./images/webdubois.jpg"
	},
	{
		"title": "W.E.B. Dubois",
		"image": "./images/webdubois.jpg"
	},
	{
		"title": "Toussaint Loverture",
		"image": "./images/toussaintlouverture.jpg"
	},
	{
		"title": "Toussaint Loverture",
		"image": "./images/toussaintlouverture.jpg"
	},
	{
		"title": "Benjamin Banneker",
		"image": "./images/benjaminbanneker.jpg"
	},
	{
		"title": "Benjamin Banneker",
		"image": "./images/benjaminbanneker.jpg"
	},
	{
		"title": "Marcus Garvey",
		"image": "./images/marcusgarvey.jpg"
	},
	{
		"title": "Marcus Garvey",
		"image": "./images/marcusgarvey.jpg"
	},
	{
		"title": "Robert Smalls",
		"image": "./images/robertsmalls.jpg"
	},
	{
		"title": "Robert Smalls",
		"image": "./images/robertsmalls.jpg"
	},
	{
		"title": "George Washington Carver",
		"image": "./images/georgewashintoncarver.jpg"
	},
	{
		"title": "George Washington Carver",
		"image": "./images/georgewashintoncarver.jpg"
	},
	{
		"title": "Frederick Douglass",
		"image": "./images/frederickdouglass.jpg"
	},
	{
		"title": "Frederick Douglass",
		"image": "./images/frederickdouglass.jpg"
	},
	{
		"title": "Crispus Attucks",
		"image": "./images/crispusattucks.jpg"
	},
	{
		"title": "Crispus Attucks",
		"image": "./images/crispusattucks.jpg"
	},
	{
		"title": "Carter G Woodson",
		"image": "./images/cartergwoodson.jpg"
	},
	{
		"title": "Carter G Woodson",
		"image": "./images/cartergwoodson.jpg"
	},
	{
		"title": "Madam CJ Walker",
		"image": "./images/madamcjwalker.jpg"
	},
	{
		"title": "Madam CJ Walker",
		"image": "./images/madamcjwalker.jpg"
	},
	{
		"title": "Sojouner Truth",
		"image": "./images/sojournertruth.jpg"
	},
	{
		"title": "Sojouner Truth",
		"image": "./images/sojournertruth.jpg"
	},
	{
		"title": "Mary Ann Shadd Cary",
		"image": "./images/maryannshaddcary.jpg"
	},
	{
		"title": "Mary Ann Shadd Cary",
		"image": "./images/maryannshaddcary.jpg"
	},
	{
		"title": "Zora Neal Hurston",
		"image": "./images/zoranealhurston.jpg"
	},
	{
		"title": "Zora Neal Hurston",
		"image": "./images/zoranealhurston.jpg"
	},
	{
		"title": "Shirley Chisholm",
		"image": "./images/shirleychisholm.jpg"
	},
	{
		"title": "Shirley Chisholm",
		"image": "./images/shirleychisholm.jpg"
	},
	{
		"title": "Bessie Coleman",
		"image": "./images/bessiecoleman.jpg"
	},
	{
		"title": "Bessie Coleman",
		"image": "./images/bessiecoleman.jpg"
	},
	{
		"title": "Kathleen Cleaver",
		"image": "./images/kathleencleaver.jpg"
	},
	{
		"title": "Kathleen Cleaver",
		"image": "./images/kathleencleaver.jpg"
	},
	{
		"title": "Angela Davis",
		"image": "./images/angeladavis.jpg"
	},
	{
		"title": "Angela Davis",
		"image": "./images/angeladavis.jpg"
	},
	{
		"title": "Katherine Johnson",
		"image": "./images/katherinejohnson.jpg"
	},
	{
		"title": "Katherine Johnson",
		"image": "./images/katherinejohnson.jpg"
	},
	{
		"title": "Henrietta Lacks",
		"image": "./images/henriettalacks.jpg"
	},
	{
		"title": "Henrietta Lacks",
		"image": "./images/henriettalacks.jpg"
	},
	{
		"title": "Harriet Tubman",
		"image": "./images/harriettubman.jpg"
	},
	{
		"title": "Harriet Tubman",
		"image": "./images/harriettubman.jpg"
	},
	{
		"title": "Ida B Wells",
		"image": "./images/idabwells.jpg"
	},
	
];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function newBoard() {
	tiles_flipped = 0;
  memory_array = _.shuffle(memory_array);

  var output = '';
  _.each(memory_array, function(memory_array_value, index) {
    output += '<div id="tile_'+ index +'" data-img='+ memory_array_value.image + ' onclick="memoryFlipTile(this,\''+ memory_array_value.title +'\')"></div>';
  });

	document.getElementById('memory_board').innerHTML = output;
}

function canFlipCard(tile) {
  return tile.innerHTML == "" && memory_values.length < 2;
}

function isOneCardFlipped() {
  return memory_values.length == 1
}

function areNoCardsFlipped() {
  return memory_values.length == 0;
}

function setCardAsFlipped(tile, value) {
  memory_values.push(value);
  memory_tile_ids.push(tile.id);
}

function isThereIsAMatch() {
  return memory_values[0] == memory_values[1];
}

function matchCards() {
  tiles_flipped += 2;
  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function isGameOver() {
  // Check to see if the whole board is cleared
  return tiles_flipped == memory_array.length;
}

function gameIsOver() {
  alert("Board cleared... generating new board");
  document.getElementById('memory_board').innerHTML = "";
  newBoard();
}

function cardsDoNotMatch() {
  setTimeout(flipCardBack, 700);
}

function flipCard(tile, value) {
	var image = tile.getAttribute('data-img')
  // tile.style.background = '#FFF';
  tile.style.backgroundImage = "url('"+ image+"')"
  tile.innerHTML = value;
  

}

function flipCardBack() {
  // Flip the 2 tiles back over
  var tile_1 = document.getElementById(memory_tile_ids[0]);
  var tile_2 = document.getElementById(memory_tile_ids[1]);
  tile_1.style.background = '#FF3399';
  tile_1.innerHTML = "";
  tile_2.style.background = '#FF3399';
  tile_2.innerHTML = "";

  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function memoryFlipTile(tile, value, image) {
	if (canFlipCard(tile)) {
		flipCard(tile, value);
    if (areNoCardsFlipped()) {
			setCardAsFlipped(tile, value);
		} else if(isOneCardFlipped()) {
      setCardAsFlipped(tile, value);
      if(isThereIsAMatch()) {
        matchCards();
        if (isGameOver()) {
          gameIsOver();
        }
      } else {
  			cardsDoNotMatch();
      }
    }
  }
}

function memoryFlipTile2(tile, value) {
  if (canFlipCard(tile)) {
    console.log('e1');
    flipCard(tile, value);
    setCardAsFlipped(tile, value);
    if (isOneCardFlipped()) {
      console.log('e2');
      if (isThereIsAMatch()) {
        console.log('e3');
        matchCards();
        if (isGameOver()) {
          console.log('e4');
          gameIsOver();
        }
      } else {
        cardsDoNotMatch();
      }
    }
  }
}
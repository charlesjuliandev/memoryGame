(function(){
	function ready(fn) {
		if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	ready(function(){

		// variables
			var app = app || {};
			// turn into object with image_url, title, 
			var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
			var memory_values = [];
			var memory_tile_ids = [];
			var tiles_flipped = 0;

		// functions
			app.newBoard = function newBoard() {
				tiles_flipped = 0;
				memory_array = _.shuffle(memory_array); 
				var output = '';
				_.forEach(memory_array, function(memory_array_value, memory_array_index) {
					output += '<div id="tile_'+ index +'" onclick="memoryFlipTile(this,\''+ memory_array_value +'\')"></div>';
				}); 
				document.getElementById('memory_board').innerHTML = output;

			}

			app.memoryFlipTile = function memoryFlipTile(tile, value) {
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

			app.init = function(){
				console.log("init");
				app.newBoard();
			}

			app.init();
	})
})()
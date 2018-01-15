var Letter = require('./letters.js');



var Words = function(word){
	this.word = word;
	this.letters = [];
	this.found  = false;
	this.getLetters = function(){
		for(var i = 0; i< this.word.length; i++){
			var newLet = new Letter(this.word[i]);
			this.letters.push(newLet);
		}
		};
	
	this.wordFound = function(){
		this.found = this.letters.every(function(currentLet) {
			return currentLet.appear;
		});
           return this.found;
			
		}
	

  this.checkLetter = function(guessLetter) {
		var counter = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.lets[i].arg == guessLetter){
				this.lets[i].appear = true;
				counter++;
			}
		}
		return counter;
};


	this.showWord = function(){
		var string = "";
			for(var i = o; i < this.letters.length; i++){
				string += this.letters[i].showLetter();
			}
				return string;
			};
	


}

module.exports = Words;

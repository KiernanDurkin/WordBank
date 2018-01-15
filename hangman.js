var Words = require("./Words.js");
var Letters = require("./letters.js");
var inquirer = require("inquirer");
var Bank = require('./wordbank.js');

 
	



game = {

		wordBank: Bank.wordbank,
		guessesRemaining:10,
		currentWord:null,

		startGame: function(arg){
			this.currentWord = new Words(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
			this.currentWord.getLetters();
			this.askUser();
					
		},

		resetGuesses : function(){
			this.guessesRemaining = 10;
		},

		askUser : function(){
			var user = this;
			inquirer.prompt([
			{
					type:"input",
					name:"guess",
					message: "Please Select a Letter"
			}

				]).then(function(result){
						console.log("you guessed: " + result.guess);
					var guessed = user.currentWord.checkLetter(result.guessLetter);

					if (guessed == 0){
							console.log("Sorry try again");
							user.guessesRemaining--;

					}
					else{
							console.log("Nice Job, You guessed a letter");
								if(user.currentWord.wordFound()){
									console.log("Congrats!");
									return;
								}
					}

					console.log("guesses remaining: " + user.guessesRemaining);

					if((user.guessesRemaining > 0) && (user.currentWord.found == false)){
						user.askUser();
					}

				});

		
			}


};
game.startGame();
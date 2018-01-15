var Letter = function(arg){
	this.char = arg;
	this.appear = false;
	this.showLetter = function(){
			if (this.char == ' '){
				this.appear = true;
				return '  ';
			}if (this.appear === false){

				return ' _ ';
			}else{
				return this.char;
			}
	
		};

};
module.exports = Letter ;
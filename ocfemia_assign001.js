// AUTHOR: Alyssa Fae S. Ocfemia
// DATE: February 14, 2016
// SECTION: AB-1L

//SAMPLE OUTPUT
//numToWords(1234);
//wordsToNum('one thousand two hundred thirty four');
//wordsToCurrency('one thousand two hundred thirty four','USD');
//numberDelimited(1234,',',3);


//This function accepts a whole number from zero (0) to 1 million 
//and prints on screen the number in word form

function numToWords (number) {
	
	//Prints the converted equivalent word for the number 0
	if (number === 0){
		console.log ("ANSWER:  zero");
	}else{
		// variable position is used as the dividend or number that will repeatedly divided or the max limit of the number
		// The variable answer is just a temporary variable. The flag1 and flag2
		// are just for bookmarks and string will be converted number to words.
		var position = 1000000;
		var answer, flag1 = 0, flag2 = 0;
		var string ="";

		do {
			//This snippet calculates the digit that number has
			answer = number % position;
			answer = (number - answer) / position;
			number = number - (answer * position);

			//Flags 
			if (answer != 0 && (position === 100000 || position === 10000 || position === 1000))	flag2 = 1;
			if (answer != 0 && (position === 100000 || position === 100))	flag1 = 1;

			if (answer != 0 && (position === 1000000 || position === 1000 || position === 1 || position === 100 
				|| position === 100000)){
				
				//Converting single digits form 1-9
				if (answer === 1) string = string + " one";
				else if (answer === 2) string = string + " two";
				else if (answer === 3) string = string + " three";
				else if (answer === 4) string = string + " four";
				else if (answer === 5) string = string + " five";
				else if (answer === 6) string = string + " six";
				else if (answer === 7) string = string + " seven";
				else if (answer === 8) string = string + " eight";
				else if (answer === 9) string = string + " nine";

				//To add the word million
				if (position === 1000000) string = string + " million";
				
			}else if (answer != 0 && (position === 10000 || position === 10 )){

				//To check if the number is from 10-19
				if (answer === 1){
					position = position / 10;
					answer = number%position;
					answer = (number - answer) / position;
					number = number - (answer * position);
					

					if (answer === 0) string = string + " ten";
					else if (answer === 1) string = string + " eleven";
					else if (answer === 2) string = string + " twelve";
					else if (answer === 3) string = string + " thirteen";
					else if (answer === 4) string = string + " fourteen";
					else if (answer === 5) string = string + " fifteen";
					else if (answer === 6) string = string + " sixteen";
					else if (answer === 7) string = string + " seventeen";

					else if (answer === 8) string = string + " eighteen";
					else if (answer === 9) string = string + " nineteen";
				}
				//If the number is divisible by 10 from 20-90
				else if (answer === 2) string = string + " twenty";
				else if (answer === 3) string = string + " thirty";
				else if (answer === 4) string = string + " forty";
				else if (answer === 5) string = string + " fifty";
				else if (answer === 6) string = string + " sixty";
				else if (answer === 7) string = string + " seventy";
				else if (answer === 8) string = string + " eighty";
				else if (answer === 9) string = string + " ninety";
				

			}
			//To add the word hundred or thousand
			if (flag1 === 1 && (position === 100000 || position === 100)) string = string + " hundred";
			if (flag2 === 1 && (position === 1000)) string = string + " thousand";
				
			//Dividing position by 10
			position = position / 10;

		}while (number != 0);
		//Prints the answer
		console.log ("ANSWER: "+string);
	}
}

//This function accepts a number in word form (from zero to 1 million)
//returns it in numerical form

function wordsToNum (words){
	//Keywords contains the words to be converted into numbers
	//Variable num is a temporary variable. answer, temp and hundredFlag are flags.
	var keywords = words.split(" ");
	var num, temp = 0, answer = 0, hundredFlag = 0;
	
	//Loop for traversing the array keywords
	for (var i = 0 ; i < keywords.length ; i++){

		//Converting the words from one-nine into their equivalent numbers.
		if (keywords[i] == "one")        num = 1;
		else if (keywords[i] == "two")   num = 2;
		else if (keywords[i] == "three") num = 3;
		else if (keywords[i] == "four")  num = 4;
		else if (keywords[i] == "five")  num = 5;
		else if (keywords[i] == "six")   num = 6;
		else if (keywords[i] == "seven") num = 7;
		else if (keywords[i] == "eight") num = 8;
		else if (keywords[i] == "nine")  num = 9;
		else{
		
		//Converting the words from eleven-nineteen into their equivalent numbers.
			if (keywords[i] == "eleven")         num = 11;
			else if (keywords[i] == "twelve")    num = 12;
			else if (keywords[i] == "thirteen")  num = 13;
			else if (keywords[i] == "fourteen")  num = 14;
			else if (keywords[i] == "fifteen")   num = 15;
			else if (keywords[i] == "sixteen")   num = 16;
			else if (keywords[i] == "seventeen") num = 17;
			else if (keywords[i] == "eighteen")  num = 18;
			else if (keywords[i] == "nineteen")  num = 19;
			else if (keywords[i] != 'hundred' && keywords[i] != 'thousand' && keywords[i] != 'million') { 
				
		//Converting the words from twenty-ninety-nine into their equivalent numbers.
				if (keywords[i] == "twenty")       num = 20;
				else if (keywords[i] == "thirty")  num = 30;
				else if (keywords[i] == "forty")   num = 40;
				else if (keywords[i] == "fifty")   num = 50;
				else if (keywords[i] == "sixty")   num = 60;
				else if (keywords[i] == "seventy") num = 70;
				else if (keywords[i] == "eighty")  num = 80;
				else if (keywords[i] == "ninety")  num = 90;
					var num2 = 0;
					i++;
					if (keywords[i] == "one")        num2 = 1;
					else if (keywords[i] == "two")   num2 = 2;
					else if (keywords[i] == "three") num2 = 3;
					else if (keywords[i] == "four")  num2 = 4;
					else if (keywords[i] == "five")  num2 = 5;
					else if (keywords[i] == "six")   num2 = 6;
					else if (keywords[i] == "seven") num2 = 7;
					else if (keywords[i] == "eight") num2 = 8;
					else if (keywords[i] == "nine")  num2 = 9;
					else i--;

					num = num + num2;
			}
		}

		//To check if its millions, thousands or hundreds.
		if (keywords[i] == "million"){
			num = num * 1000000;
			answer = answer + num;	
		} else if (keywords[i] === "hundred" ) {
			temp = num * 100;
			hundredFlag = 1;
		}else if (hundredFlag === 1){
			if (keywords[i] === 'thousand'){
				temp = temp * 1000;
				answer = answer + temp;
			} else temp = temp + num;
				
				hundredFlag = 0;
		} else if (keywords[i] === 'thousand'){
			temp = temp * 1000;
			answer = answer + temp;
			temp = 0;
		} else temp = num;
	}
	if (temp != 0)	answer = answer + temp;
	
	//Prints the answer
	console.log ("ANSWER:  "+answer);
}

//This function accepts two arguments: the first argument is the number in word form
//(from zero to 1 million) and the second argument is any of the following: JPY,
//PHP, USD. The function returns the number in words to its numerical form with 
//a prefix of the currency

function wordsToCurrency (words, currency){
	//Keywords contains the words to be converted into numbers
	//Variable num is a temporary variable. answer, temp and hundredFlag are flags.
	var keywords = words.split(" ");
	var num, temp = 0, answer = 0, hundredFlag = 0;

	//Loop for traversing the array keywords
	for (var i = 0 ; i < keywords.length ; i++){

		//Converting the words from one-nine into their equivalent numbers.
		if (keywords[i] == "one")        num = 1;
		else if (keywords[i] == "two")   num = 2;
		else if (keywords[i] == "three") num = 3;
		else if (keywords[i] == "four")  num = 4;
		else if (keywords[i] == "five")  num = 5;
		else if (keywords[i] == "six")   num = 6;
		else if (keywords[i] == "seven") num = 7;
		else if (keywords[i] == "eight") num = 8;
		else if (keywords[i] == "nine")  num = 9;
		else{
			
			//Converting the words from eleven-nineteen into their equivalent numbers.
			if (keywords[i] == "eleven")         num = 11;
			else if (keywords[i] == "twelve")    num = 12;
			else if (keywords[i] == "thirteen")  num = 13;
			else if (keywords[i] == "fourteen")  num = 14;
			else if (keywords[i] == "fifteen")   num = 15;
			else if (keywords[i] == "sixteen")   num = 16;
			else if (keywords[i] == "seventeen") num = 17;
			else if (keywords[i] == "eighteen")  num = 18;
			else if (keywords[i] == "nineteen")  num = 19;
			else if (keywords[i] != 'hundred' && keywords[i] != 'thousand' && keywords[i] != 'million') { 
				
				//Converting the words from twenty-ninety-nine into their equivalent numbers.
				if (keywords[i] == "twenty")       num = 20;
				else if (keywords[i] == "thirty")  num = 30;
				else if (keywords[i] == "forty")   num = 40;
				else if (keywords[i] == "fifty")   num = 50;
				else if (keywords[i] == "sixty")   num = 60;
				else if (keywords[i] == "seventy") num = 70;
				else if (keywords[i] == "eighty")  num = 80;
				else if (keywords[i] == "ninety")  num = 90;
					var num2 = 0;
					i++;
					if (keywords[i] == "one")        num2 = 1;
					else if (keywords[i] == "two")   num2 = 2;
					else if (keywords[i] == "three") num2 = 3;
					else if (keywords[i] == "four")  num2 = 4;
					else if (keywords[i] == "five")  num2 = 5;
					else if (keywords[i] == "six")   num2 = 6;
					else if (keywords[i] == "seven") num2 = 7;
					else if (keywords[i] == "eight") num2 = 8;
					else if (keywords[i] == "nine")  num2 = 9;
					else i--;

					num = num + num2;
			}
		}

		//To check if its millions, thousands or hundreds.
		if (keywords[i] == "million"){
			num = num * 1000000;
			answer = answer + num;	
		} else if (keywords[i] === "hundred" ) {
			temp = num * 100;
			hundredFlag = 1;
		}else if (hundredFlag === 1){
			if (keywords[i] === 'thousand'){
				temp = temp * 1000;
				answer = answer + temp;
			} else temp = temp + num;
				
				hundredFlag = 0;
		} else if (keywords[i] === 'thousand'){
			temp = temp * 1000;
			answer = answer + temp;
			temp = 0;
		} else temp = num;
	}

	if (temp != 0)	answer = answer + temp;
	
	//Concatenates the currency to the answer (converted words);
	answer = currency + " " + answer;

	//Prints the answer
	console.log ("ANSWER:  "+answer);

}

//Accepts three arguments: the first is the number from zero to 1 miliion, the
//second is the delimiter to be used (single character only) and third, the
//number of jumps when the delimiter will appear (from right most going to left most digit)
function numberDelimited (number, delimiter, position){
	 //It converts the number into string
	 //The variable word is the coverted string
	 var word = number.toString();
	 
	 //It mainly divide the string 'word' into two. It is slice by the position where the delimiter will be inserted.
	 var last = word.substr(word.length-position, word.length);
	 var first = word.substring(0, word.length-position);
	 
	 //concatenates the fist and last part of the string with the delimiter
	 var answer = first+delimiter+last;
	 //prints the answer
	 console.log("ANSWER:  "+answer);
}
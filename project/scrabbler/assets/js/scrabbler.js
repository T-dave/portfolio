//h3.childElementCount
let wordd = document.querySelector('input');
let button = document.querySelector('.big');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let lo = document.querySelector('#lo');
let fiveTwo = [];
let fiveThree = [];
let fiveFour = [];
let fiveFive = [];
let fiveSix = [];
// let fiveSeven = [];
// let fiveEight = [];
// let fiveNine = [];
// let fiveTen = [];
let word = wordd.value;
let wordLength = word.length;
let lastWord = wordLength - 1;
let newWords = [];
let result = [];
let tI = 0;
let pen = lastWord - 1;
let penn = pen-1;
let wI = 0;
let lastThree
// let staticThree = lastThree[tI];
let hover = word[penn];
lastThree = [word[penn], word[pen], word[lastWord]];
let scrabbled 
let newWord
let tn1;
let tn2;
let tn3;
let tn4 ;
let tn5 ;
let tn6 ;
let tn7 ;
let tn8 ;
let tn9 ;
let tn10 ;
let ne1 ;
let ne2 ;
let ne3;
let ne4 ;
let ne5 ;
let ne6 ;
let ne7 ;
let ne8 ;
let ne9 ;
let et1 ;
let et2 ;
let et3;
let et4 ;
let et5 ;
let et6 ;
let et7 ;
let et8 ;
let sv1 ;
let sv2 ;
let sv3 ;
let sv4 ;
let sv5 ;
let sv6 ;
let sv7;
let sx1 ;
let sx2 ;
let sx3 ;
let sx4 ;
let sx5 ;
let sx6 ;
let five1; 
let five2 ;
let five3 ;
let five4 ;
let five5 ;
let four1 ;
let four2;
let four3 ;
let four4 ;


function load(){
	h4.className = 'loader';
	button.className = 'button unclick';
}
function unLoad(){
	h4.className = 'loade';
	button.className = 'button big';
}




function setNull(){
tn1 = null;
tn2 = null;
tn3 = null;
tn4 = null;
tn5 = null;
tn6 = null;
tn7 = null;
tn8 = null;
tn9 = null;
tn10 = null;
ne1 = null;
ne2 = null;
ne3 = null;
ne4 = null;
ne5 = null;
ne6 = null;
ne7 = null;
ne8 = null;
ne9 = null;
et1 = null;
et2 = null;
et3 = null;
et4 = null;
et5 = null;
et6 = null;
et7 = null;
et8 = null;
sv1 = null;
sv2 = null;
sv3 = null;
sv4 = null;
sv5 = null;
sv6 = null;
sv7 = null;
sx1 = null;
sx2 = null;
sx3 = null;
sx4 = null;
sx5 = null;
sx6 = null;
five1 = null;
five2 = null;
five3 = null;
five4 = null;
five5 = null;
four1 = null;
four2 = null;
four3 = null;
four4 = null;
}









function scrabbleTwo(){
	word = wordd.value;
	wordLength = word.length;	
	 scrabbled = [word[0], word[1]];
	newWord = scrabbled.join('');
	 newWords.push(newWord);
	 scrabbled = [word[1], word[0]];
	newWord = scrabbled.join('');
	 newWords.push(newWord);	  


}



function scrabbleThree(tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10, ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9,
 et1, et2, et3, et4, et5, et6, et7, et8, sv1, sv2, sv3, sv4, sv5, sv6, sv7, sx1, sx2, sx3, sx4, sx5, sx6, five1, five2, five3, five4, five5, four1, four2, four3, four4){
	word = wordd.value;
	wordLength = word.length;
	lastWord = wordLength - 1;
	pen = lastWord - 1;
    penn = pen-1;
	
	scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], word[four1], word[penn],
	 word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
	word[four2], word[pen], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], word[four3], word[lastWord],
	 word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], word[four4],
	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
	newWord = scrabbled.join('');
	newWords.push(newWord);
	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
	 word[four1], word[penn],word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
	  word[four2], word[lastWord],word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
	   word[four3], word[pen], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
	    word[four4],
	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
	 newWord = scrabbled.join('');
	 newWords.push(newWord);	
	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
	 word[four1], word[pen], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
	 word[four2], word[penn], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
	 word[four3], word[lastWord], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
	 word[four4],
	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
	 newWord = scrabbled.join('');
	 newWords.push(newWord);
	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
	 word[four1], word[pen], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
	 word[ four2], word[lastWord], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
	 word[four3], word[penn], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
	 word[four4],
	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
	 newWord = scrabbled.join('');
	 newWords.push(newWord);
	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
	 word[four1], word[lastWord], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
	 word[four2], word[penn], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five2], 
	 word[four3], word[pen], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
	 word[four4],
	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
	 newWord = scrabbled.join('');
	 newWords.push(newWord);
	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
	 word[four1], word[lastWord], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
	 word[four2], word[pen], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
	 word[four3], word[penn], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
	 word[four4],
	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
	 newWord = scrabbled.join('');
	 newWords.push(newWord);


}



setNull()
function scrabbleFour(){
	word = wordd.value;
	wordLength = word.length;	
four1 = wordLength - 4;
 scrabbleThree(tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10,
  ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9,
   et1, et2, et3, et4, et5, et6, et7, et8,
    sv1, sv2, sv3, sv4, sv5, sv6, sv7, sx1, sx2, sx3, sx4, sx5, sx6,
     five1, five2, five3, five4, five5,
      four1, four2, four3, four4);
four1 = null;
four2 = wordLength - 4;
 scrabbleThree(tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10,
  ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9,
   et1, et2, et3, et4, et5, et6, et7, et8,
    sv1, sv2, sv3, sv4, sv5, sv6, sv7, sx1, sx2, sx3, sx4, sx5, sx6,
     five1, five2, five3, five4, five5,
      four1, four2, four3, four4);
 four2 = null;
four3 = wordLength - 4;
 scrabbleThree(tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10,
  ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9,
   et1, et2, et3, et4, et5, et6, et7, et8,
    sv1, sv2, sv3, sv4, sv5, sv6, sv7, sx1, sx2, sx3, sx4, sx5, sx6,
     five1, five2, five3, five4, five5,
      four1, four2, four3, four4);
 four3 = null;
four4 = wordLength - 4;
 scrabbleThree(tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10,
  ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9,
   et1, et2, et3, et4, et5, et6, et7, et8,
    sv1, sv2, sv3, sv4, sv5, sv6, sv7, sx1, sx2, sx3, sx4, sx5, sx6,
     five1, five2, five3, five4, five5,
      four1, four2, four3, four4);
 four4 = null;

}
function scrabbleFive(){
	word = wordd.value;
	wordLength = word.length;	
	five1 = wordLength - 5;
	scrabbleFour();
	five1 = null;
	five2 = wordLength - 5;
	scrabbleFour();
	five2 = null;
	five3 = wordLength - 5;
	scrabbleFour();	
	five3 = null;
	five4 = wordLength - 5;
	scrabbleFour();
	five4 = null;
	five5 = wordLength - 5;
	scrabbleFour();
	five5 = null;
}



// function scrabbleFiveThree(tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10, ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9,
//  et1, et2, et3, et4, et5, et6, et7, et8, sv1, sv2, sv3, sv4, sv5, sv6, sv7, sx1, sx2, sx3, sx4, sx5, sx6, five1, five2, five3, five4, five5, four1, four2, four3, four4){
// 	threeWord = fiveThree.value;
// 	threeWordLength = threeWord.length;
// 	threeLastWord = threeWordLength - 1;
// 	threePen = threeLastWord - 1;
//     threePenn = threePen-1;
	
// 	scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], word[four1], word[penn],
// 	 word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
// 	word[four2], word[pen], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], word[four3], word[lastWord],
// 	 word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], word[four4],
// 	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
// 	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
// 	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
// 	newWord = scrabbled.join('');
// 	newWords.push(newWord);
// 	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
// 	 word[four1], word[penn],word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
// 	  word[four2], word[lastWord],word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
// 	   word[four3], word[pen], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
// 	    word[four4],
// 	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
// 	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
// 	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
// 	 newWord = scrabbled.join('');
// 	 newWords.push(newWord);	
// 	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
// 	 word[four1], word[pen], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
// 	 word[four2], word[penn], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
// 	 word[four3], word[lastWord], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
// 	 word[four4],
// 	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
// 	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
// 	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
// 	 newWord = scrabbled.join('');
// 	 newWords.push(newWord);
// 	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
// 	 word[four1], word[pen], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
// 	 word[ four2], word[lastWord], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
// 	 word[four3], word[penn], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
// 	 word[four4],
// 	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
// 	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
// 	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
// 	 newWord = scrabbled.join('');
// 	 newWords.push(newWord);
// 	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
// 	 word[four1], word[lastWord], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
// 	 word[four2], word[penn], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five2], 
// 	 word[four3], word[pen], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
// 	 word[four4],
// 	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
// 	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
// 	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
// 	 newWord = scrabbled.join('');
// 	 newWords.push(newWord);
// 	 scrabbled = [word[tn1], word[ne1], word[et1], word[sv1], word[sx1], word[five1], 
// 	 word[four1], word[lastWord], word[tn2], word[ne2], word[et2], word[sv2], word[sx2], word[five2], 
// 	 word[four2], word[pen], word[tn3], word[ne3], word[et3], word[sv3], word[sx3], word[five3], 
// 	 word[four3], word[penn], word[tn4], word[ne4], word[et4], word[sv4], word[sx4], word[five4], 
// 	 word[four4],
// 	     word[five5], word[sx5], word[sx5], word[sv5], word[et5], word[ne5], word[tn5],
// 	     word[sx6], word[sv6], word[et6], word[ne6], word[tn6],
// 	     word[sv7], word[et7], word[ne7], word[tn7], word[et8], word[ne8], word[tn8], word[ne9], word[tn9], word[tn10]];
// 	 newWord = scrabbled.join('');
// 	 newWords.push(newWord);


// }
// function scrabbleFiveTwo(){
// 	 scrabbled = [fiveTwo[0], fiveTwo[1]];
// 	newWord = scrabbled.join('');
// 	 newWords.push(newWord);
// 	 scrabbled = [fiveTwo[1], fiveTwo[0]];
// 	newWord = scrabbled.join('');
// 	 newWords.push(newWord);	  


// }


function scrabbleSix(){
	word = wordd.value;
	wordLength = word.length;	
	sx1 = wordLength - 6;
	scrabbleFive();
	sx1 = null;
	sx2 = wordLength - 6;
	scrabbleFive();
	sx2 = null;
	sx3 = wordLength - 6;
	scrabbleFive();
	sx3 = null;
	sx4 = wordLength - 6;
	scrabbleFive();
	sx4 = null;
	sx5 = wordLength - 6;
	scrabbleFive();
	sx5 = null;
	sx6 = wordLength - 6;
	scrabbleFive();	
	sx6 = null;

}

function scrabbleSeven(){
	word = wordd.value;
	wordLength = word.length;	
	sv1 = wordLength - 7;
	scrabbleSix();
	sv1 = null;
	sv2 = wordLength - 7;
	scrabbleSix();
	sv2 = null;
	sv3 = wordLength - 7;
	scrabbleSix();
	sv3 = null;
	sv4 = wordLength - 7;
	scrabbleSix();
	sv4 = null;
	sv5 = wordLength - 7;
	scrabbleSix();
	sv5 = null;
	sv6 = wordLength - 7;
	scrabbleSix();
	sv6 = null;
	sv7 = wordLength - 7;
	scrabbleSix();
	sv7 = null;




}

function scrabbleEight(){
	word = wordd.value;
	wordLength = word.length;	
	et1 = wordLength - 8;
	scrabbleSeven();
	et1 = null;
	et2 = wordLength - 8;
	scrabbleSeven();
	et2 = null;
	et3 = wordLength - 8;
	scrabbleSeven();
	et3 = null;
	et4 = wordLength - 8;
	scrabbleSeven();
	et4 = null;
	et5 = wordLength - 8;
	scrabbleSeven();
	et5 = null;
	et6 = wordLength - 8;
	scrabbleSeven();
	et6 = null;
	et7 = wordLength - 8;
	scrabbleSeven();
	et7 = null;
	et8 = wordLength - 8;
	scrabbleSeven();
	et8 = null;

}


function scrabbleNine(){
	word = wordd.value;
	wordLength = word.length;	
	ne1 = wordLength - 9;
	scrabbleEight();
	ne1 = null;
	ne2 = wordLength - 9;
	scrabbleEight();
	ne2 = null;
	ne3 = wordLength - 9;
	scrabbleEight();
	ne3 = null;
	ne4 = wordLength - 9;
	scrabbleEight();
	ne4 = null;
	ne5 = wordLength - 9;
	scrabbleEight();
	ne5 = null;
	ne6 = wordLength - 9;
	scrabbleEight();
	ne6 = null;
	ne7 = wordLength - 9;
	scrabbleEight();
	ne7 = null;
	ne8 = wordLength - 9;
	scrabbleEight();
	ne8 = null;
	ne9 = wordLength - 9;
	scrabbleEight();
	ne9 = null;

}
function scrabbleTen(){
	word = wordd.value;
	wordLength = word.length;	
	tn1 = wordLength - 10;
	scrabbleNine();
	tn1 = null;
	tn2 = wordLength - 10;
	scrabbleNine();
	tn2 = null;
	tn3 = wordLength - 10;
	scrabbleNine();
	tn3 = null;
	tn4 = wordLength - 10;
	scrabbleNine();
	tn4 = null;
	tn5 = wordLength - 10;
	scrabbleNine();
	tn5 = null;
	tn6 = wordLength - 10;
	scrabbleNine();
	tn6 = null;
	tn7 = wordLength - 10;
	scrabbleNine();
	tn7 = null;
	tn8 = wordLength - 10;
	scrabbleNine();
	tn8 = null;
	tn9 = wordLength - 10;
	scrabbleNine();
	tn9 = null;
	tn10 = wordLength - 10;
	scrabbleNine();
	tn10 = null;
}

// if (wordLength === 0) {
// 	console.log('enter a word');
// }else if(wordLength === 1){
// 	newWords.push(word);
// }else if(wordLength === 2){
// 	scrabbleTwo();
// }else if(wordLength === 3){
// 	scrabbleThree();
// }else if(wordLength === 4){
// 	scrabbleFour();
// }else if(wordLength === 5){
// 	scrabbleFive();
// }else if(wordLength === 6){
// 	scrabbleSix();
// }else if(wordLength === 7){
// 	scrabbleSeven();
// }else if(wordLength ===8){
// 	scrabbleEight();
// }else if(wordLength === 9){
// 	scrabbleNine();
// }else if(wordLength === 10){
// 	scrabbleTen();
// }else{
// 	console.log('Word too long');
// }


// for (var i = 0; i < englishWords.length; i++) {
//  	for (var j = 0; j < newWords.length; j++) {
 	
//  	if (englishWords[i] == newWords[j]){
//  		console.log(newWords[j]);
//  	}
// }

// }
button.addEventListener('click', ()=>{
						load(); 
						h3.innerHTML = '';

})

wordd.addEventListener('keyup', (event)=>{
						if (event.keyCode === 13) {
						load(); 
						h3.innerHTML = '';
						setTimeout(myFunction, 100);
					}

})


function myFunction(){
// 	if (h3.innerText.length === 0 || h3.innerText === "Enter a word") {
// 	load();
// 	console.log('hreee');
// }

	word = wordd.value;
	wordLength = word.length;
if (wordLength === 0) {
	h3.innerHTML = 'Enter a word';
}else if(wordLength === 1){
	newWords.push(word);
}else if(wordLength === 2){
	scrabbleTwo();
}else if(wordLength === 3){
	scrabbleThree();
for (let i = 0; i < newWords.length; i++) {
	for (let j = 0; j < fiveTwo.length; j++) {
	if (fiveTwo[j] === newWords[i].slice(1)) {
		fiveTwo.splice(j, 1);
	}}
	fiveTwo.push(newWords[i].slice(1));
}	
}else if(wordLength === 4){
	scrabbleFour();
for (let i = 0; i < newWords.length; i++) {
	for (let j = 0; j < fiveThree.length; j++) {
	if (fiveThree[j] === newWords[i].slice(1)) {
		fiveThree.splice(j, 1);
	}}
	fiveThree.push(newWords[i].slice(1));
	for (let j = 0; j < fiveTwo.length; j++) {
	if (fiveTwo[j] === newWords[i].slice(2)) {
		fiveTwo.splice(j, 1);
	}}
	fiveTwo.push(newWords[i].slice(2));
}	
}else if(wordLength === 5){
	scrabbleFive();
	for (let i = 0; i < newWords.length; i++) {
	for (let j = 0; j < fiveFour.length; j++) {
	if (fiveFour[j] === newWords[i].slice(1)) {
		fiveFour.splice(j, 1);
	}}
	fiveFour.push(newWords[i].slice(1));
	for (let j = 0; j < fiveThree.length; j++) {
	if (fiveThree[j] === newWords[i].slice(2)) {
		fiveThree.splice(j, 1);
	}}
	fiveThree.push(newWords[i].slice(2));
	for (let j = 0; j < fiveTwo.length; j++) {
	if (fiveTwo[j] === newWords[i].slice(3)) {
		fiveTwo.splice(j, 1);
	}}
	fiveTwo.push(newWords[i].slice(3));
}
}else if(wordLength === 6){
	scrabbleSix();
	for (let i = 0; i < newWords.length; i++) {
	for (let j = 0; j < fiveFive.length; j++) {
	if (fiveFive[j] === newWords[i].slice(1)) {
		fiveFive.splice(j, 1);
	}}
	fiveFive.push(newWords[i].slice(1));
	for (let j = 0; j < fiveFour.length; j++) {
	if (fiveFour[j] === newWords[i].slice(2)) {
		fiveFour.splice(j, 1);
	}}
	fiveFour.push(newWords[i].slice(2));
	for (let j = 0; j < fiveThree.length; j++) {
	if (fiveThree[j] === newWords[i].slice(3)) {
		fiveThree.splice(j, 1);
	}}
	fiveThree.push(newWords[i].slice(3));
	for (let j = 0; j < fiveTwo.length; j++) {
	if (fiveTwo[j] === newWords[i].slice(4)) {
		fiveTwo.splice(j, 1);
	}}
	fiveTwo.push(newWords[i].slice(4));
}
}else if(wordLength === 7){
	scrabbleSeven();
		
}else if(wordLength ===8){
	scrabbleEight();
}else if(wordLength === 9){
	scrabbleNine();
}else if(wordLength === 10){
	scrabbleTen();
}else{
	h3.innerHTML = 'Word too long';
}


for (var i = 0; i < englishWords.length; i++) {
 	for (var j = 0; j < newWords.length; j++) {
 	
 	if (englishWords[i] == newWords[j]){
 		result.push(newWords[j]);
 	}
}
for (var k = 0; k < fiveTwo.length; k++) {
	if (englishWords[i] == fiveTwo[k]){
 		result.push(fiveTwo[k]);
 	}
}
for (var l = 0; l < fiveThree.length; l++) {
	if (englishWords[i] == fiveThree[l]){
 		result.push(fiveThree[l]);
 	}
}
for (var m = 0; m < fiveFour.length; m++) {
	if (englishWords[i] == fiveFour[m]){
 		result.push(fiveFour[m]);
 	}
}
for (var n = 0; n < fiveFive.length; n++) {
	if (englishWords[i] == fiveFive[n]){
 		result.push(fiveFive[n]);
 	}
}
for (var o = 0; o < fiveSix.length; o++) {
	if (englishWords[i] == fiveSix[o]){
 		result.push(fiveSix[o]);
 	}
}
}	
wordd.value = '';

if (wordLength === 0) {
	h3.innerHTML = 'Enter a word';
	
}else if (wordLength > 0 && wordLength < 7){
	h3.innerHTML = 'Scrabbled words are: <br>' + result.join('<br> ');
	
}else{
	h3.innerHTML = 'Scrabbled words are: <br>' + result.join('<br> ') + '<br>Word too long for total scrabbling';

}
console.log('click');

unLoad(); 
wordd.addEventListener('click', ()=>{
						document.location.reload(true);
						console.log('jdod');

})
}

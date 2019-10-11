/*jshint esversion: 6*/

function changeNumToWords (arg) {  //The first digit should be non-zero
  const original_num = arg;
  arg = parseInt(arg);
  var word_arr = [];
  var final = "";
  var digits = parseInt(1+Math.log10(arg));
  for (var i = 0; i < digits; i++) {
    rem = arg%10;
    arg = (arg-rem)/10;
    switch(rem) {
      case 0:word = "Zero";break;
      case 1:word = "One";break;
      case 2:word = "Two";break;
      case 3:word = "Three";break;
      case 4:word = "Four";break;
      case 5:word = "Five";break;
      case 6:word = "Six";break;
      case 7:word = "Seven";break;
      case 8:word = "Eight";break;
      case 9:word = "Nine";break;
    }
    word_arr.unshift(word);
  }
  console.log(word_arr);

  for (var j = 0; j < word_arr.length; j++) {
    final += word_arr[j]+" ";
  }
  console.log(original_num +" : "+ final);
  }

  changeNumToWords(1234);
  changeNumToWords(540);
  changeNumToWords(0567);

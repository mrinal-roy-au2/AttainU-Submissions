atomsCounter("H2O")
atomsCounter("NaCl")
atomsCounter("Na2CO3")
atomsCounter("CH3COOH")
atomsCounter("CH3COOC2H5")
atomsCounter("AlCl3MgCl3")


function atomsCounter (arg) {
  var letter = []
  var element = []
  var composition = []
  for (let j = 0; j < arg.length; j++) {
    letter.push(arg.charAt(j))
  }
  // console.log(letter);
  var i=0
  while(i < letter.length){
    // console.log(`i : ${i} | letter: ${letter.length}`);
    // console.log(parseInt(letter[i]));
    // console.log(isNaN(parseInt(letter[i])));
    if(isNaN(letter[i]) && isNaN(letter[i+1])) {
      if(checkLowerCase(letter[i+1])) {
        current_element = letter[i]+letter[i+1]
        i=i+2
      } else {
        current_element = letter[i]
        i=i+1
      }
      element.push(current_element)
    } else {
      element.push(letter[i])
      i=i+1
    }
  }
  // console.log(element);
  var tempElem = [];
  for(let i=0; i<element.length; i++){
    if(isNaN(element[i])) {
      tempElem.push(element[i])
    } else {continue}
  }

  var uniqueAtoms = [];
  uniqueAtoms = new Set(tempElem);
  uniqueAtoms = [...uniqueAtoms];

  for (let i = 0; i < element.length; i++) {
    if(isNaN(element[i])) {
      if(isNaN(element[i+1])) {
        composition.push({"element":element[i], "count":1})
      } else {
        composition.push({"element":element[i], "count":parseInt(element[i+1])})
      }
    } else {continue}
  }
  var compound = []
  for (let i = 0; i < uniqueAtoms.length; i++) {
    var countOfElem = 0
    for (let j = 0; j < composition.length; j++) {
      if (uniqueAtoms[i] === composition[j].element) {
        countOfElem = countOfElem + composition[j].count;
      } else {continue}
    }
    compound.push({"element":uniqueAtoms[i], "count":countOfElem})
  }
  console.log(compound);
}



function checkLowerCase(item="A") {
  if(item === item.toLowerCase()) {
    return true
  } else { return false }
}

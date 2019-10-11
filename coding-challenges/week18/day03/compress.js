const condenseWord = (word) => {
  var countSet = []
  var alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U", "V","W","X","Y","Z"]
  alphabets.forEach((each, key) => {
    console.log(each);
    var count = 0
    for (let i = 0; i < word.length; i++) {
      count = (each === word.charAt(i)) ? count+1 : count
    }
    countSet.push({'alphabet':each, 'count':count})
  })
  console.log(countSet);
  var condensed =""
  for(let i=0; i<countSet.length; i++) {
    if((countSet[i].count !== 0)) {
      if (countSet[i].count !== 1){
      condensed = condensed.concat(countSet[i].alphabet)
      condensed = condensed.concat(countSet[i].count.toString())
    } else {
      condensed = condensed.concat(countSet[i].alphabet)
    }
    }
  }
  console.log(condensed);
}

condenseWord("ABBBDFJYKJHKJHK")

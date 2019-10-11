var pattern = (N) => {
  var display=''
  for (var i = 1; i <= N; i++) {
    var spaces_before = N-i
    var spaces_after = N-i-1
    var stars = i
    for (var b=1; b<=spaces_before; b++){ display += ' ' }
    for (var t=1; t<=stars; t++){ display += '* ' }
    for (var a=1; a<=spaces_after; a++){ display += ' ' }
    display += `${'\n'}`
  }
  console.log(display)
}

pattern(5)
pattern(10)
pattern(15)

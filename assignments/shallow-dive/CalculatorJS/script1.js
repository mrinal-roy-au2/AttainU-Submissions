// var num1 = parseFloat(document.getElementById("num1").value);
// var num2 = parseFloat(document.getElementById("num2").value);

document.querySelector("#adn").addEventListener("click", calAdd(num1, num2));

document.querySelector("#sub").addEventListener("click", calSub(num1, num2));

document.querySelector("#mul").addEventListener("click", calMul(num1, num2));

document.querySelector("#dvd").addEventListener("click", calDvd(num1, num2));

function calAdd(num1, num2) {
  console.log(document.getElementById("num1").value);
  console.log(document.getElementById("num2").value);
  document.querySelector("#output").value = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
}

function calSub(num1, num2) {
    document.querySelector("#output").text = parseFloat(document.getElementById("num1").value) - parseFloat(document.getElementById("num2").value);
}

function calMul(num1, num2) {
    document.querySelector("#output").text = parseFloat(document.getElementById("num1").value) * parseFloat(document.getElementById("num2").value);
}

function calDvd(num1, num2) {
    document.querySelector("#output").text = parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value);
}

function n1(num) {
  if (document.getElementById("ans").innerText.length == 20) {
    console.log("stop");
  } else if (document.getElementById("move-ans").innerText == "invalid") {
    document.getElementById("ans").innerHTML += num;
  } else if (document.getElementById("move-ans").innerText.length != 0) {
    console.log("clear first");
  } else {
    document.getElementById("ans").innerHTML += num;
  }
}
function operators(num) {
  let ans_div = document.getElementById("ans");
  let length = document.getElementById("ans").innerText.length;
  length = length - 1;
  if (
    ans_div.innerText.charAt(length) === "*" ||
    ans_div.innerText.charAt(length) === "+" ||
    ans_div.innerText.charAt(length) === "-" ||
    ans_div.innerText.charAt(length) === "/"
  ) {
    let value = document.getElementById("ans").innerText;
    ans_div.innerHTML = value.replace(value.charAt(length), num);
    console.log(length);
  } else if (document.getElementById("move-ans").innerText.length != 0) {
    console.log("clear first");
  } else {
    document.getElementById("ans").innerHTML += num;
  }
}

function n2() {
  let sum = document.getElementById("ans").innerText;
  let length = document.getElementById("ans").innerText.length - 1;
  if (document.getElementById("move-ans").innerText == "invalid") {
    solve();
  } else if (document.getElementById("move-ans").innerText.length != 0) {
    console.log("clear");
  } else if (
    sum.charAt(length) == "*" ||
    sum.charAt(length) == "/" ||
    sum.charAt(length) == "+" ||
    sum.charAt(length) == "-"
  ) {
    console.log("stop");
    document.getElementById("move-ans").innerHTML = "invalid";
  } else {
    solve();
  }
}
function back() {
  let num = document.getElementById("ans").innerText;
  num = num.slice(0, -1);
  document.getElementById("ans").innerHTML = num;
}
function remove(clear) {
  document.getElementById("ans").innerHTML = clear;
  document.getElementById("move-ans").innerHTML = clear;
}
function sign() {
  var sigs = document.getElementById("ans").innerText;
  let sum = -eval(sigs);
  document.getElementById("ans").innerHTML = sum;
}

function solve() {
  try {
    let sum = document.getElementById("ans").innerText;
    document.getElementById("move-ans").innerHTML = sum;
    sum = eval(sum);
    console.log(sum);
    document.getElementById("ans").innerHTML = +sum;
  } catch (error) {
    document.getElementById("move-ans").innerHTML = "syntax error";
  }
}

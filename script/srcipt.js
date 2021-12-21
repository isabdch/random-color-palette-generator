let button = document.getElementsByTagName("button")[0];
let span = document.getElementsByTagName("span");
let h2 = document.getElementsByTagName("h2")[0];
let p = document.getElementsByTagName("p");

button.addEventListener("click", createPalette);
button.addEventListener("click", colors);
button.addEventListener("click", height);

function createPalette() {
  let div = document.getElementsByTagName("div")[0];
  div.innerHTML = "<span><p></p></span>".repeat(getRandomNumber(3, 11));
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let z = 0; z < 6; z++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colors() {
  if (span.length == 3) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
  } else if (span.length == 4) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
  } else if (span.length == 5) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
    var e = (span[4].style.backgroundColor = randomColor());
  } else if (span.length == 6) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
    var e = (span[4].style.backgroundColor = randomColor());
    var f = (span[5].style.backgroundColor = randomColor());
  } else if (span.length == 7) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
    var e = (span[4].style.backgroundColor = randomColor());
    var f = (span[5].style.backgroundColor = randomColor());
    var g = (span[6].style.backgroundColor = randomColor());
  } else if (span.length == 8) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
    var e = (span[4].style.backgroundColor = randomColor());
    var f = (span[5].style.backgroundColor = randomColor());
    var g = (span[6].style.backgroundColor = randomColor());
    var h = (span[7].style.backgroundColor = randomColor());
  } else if (span.length == 9) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
    var e = (span[4].style.backgroundColor = randomColor());
    var f = (span[5].style.backgroundColor = randomColor());
    var g = (span[6].style.backgroundColor = randomColor());
    var h = (span[7].style.backgroundColor = randomColor());
    var i = (span[8].style.backgroundColor = randomColor());
  } else if (span.length == 10) {
    var a = (span[0].style.backgroundColor = randomColor());
    var b = (span[1].style.backgroundColor = randomColor());
    var c = (span[2].style.backgroundColor = randomColor());
    var d = (span[3].style.backgroundColor = randomColor());
    var e = (span[4].style.backgroundColor = randomColor());
    var f = (span[5].style.backgroundColor = randomColor());
    var g = (span[6].style.backgroundColor = randomColor());
    var h = (span[7].style.backgroundColor = randomColor());
    var i = (span[8].style.backgroundColor = randomColor());
    var j = (span[9].style.backgroundColor = randomColor());
  }

  if (span.length == 3) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
  } else if (span.length == 4) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
  } else if (span.length == 5) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
    p[4].innerHTML = e;
  } else if (span.length == 6) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
    p[4].innerHTML = e;
    p[5].innerHTML = f;
  } else if (span.length == 7) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
    p[4].innerHTML = e;
    p[5].innerHTML = f;
    p[6].innerHTML = g;
  } else if (span.length == 8) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
    p[4].innerHTML = e;
    p[5].innerHTML = f;
    p[6].innerHTML = g;
    p[7].innerHTML = h;
  } else if (span.length == 9) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
    p[4].innerHTML = e;
    p[5].innerHTML = f;
    p[6].innerHTML = g;
    p[7].innerHTML = h;
    p[8].innerHTML = i;
  } else if (span.length == 10) {
    p[0].innerHTML = a;
    p[1].innerHTML = b;
    p[2].innerHTML = c;
    p[3].innerHTML = d;
    p[4].innerHTML = e;
    p[5].innerHTML = f;
    p[6].innerHTML = g;
    p[7].innerHTML = h;
    p[8].innerHTML = i;
    p[9].innerHTML = j;
  }
}

function height() {
  h2.style.marginTop = "70px";
}


let generate = document.getElementById("generate");
let span = document.getElementsByTagName("span");
let h2 = document.getElementsByTagName("h2")[0];
let p = document.getElementsByTagName("p");
let Default = document.getElementById("default");
let pastel = document.getElementById("pastel");
let dark = document.getElementById("dark");
let range = document.getElementById("range");

generate.addEventListener("click", createPalette);
Default.addEventListener("click", DefaultS);
pastel.addEventListener("click", pastelS);
dark.addEventListener("click", darkS);

function DefaultS() {
  Default.setAttribute("checked", true);
  if ((Default.checked = true)) {
    generate.addEventListener("click", colorsDefault);
  }
}

function darkS() {
  dark.setAttribute("checked", true);
  if ((dark.checked = true)) {
    generate.addEventListener("click", colorsDark);
  }
}

function pastelS() {
  pastel.setAttribute("checked", true);
  if ((pastel.checked = true)) {
    generate.addEventListener("click", colorsPastel);
  }
}

generate.addEventListener("click", colorsDefault);

generate.addEventListener("click", height);

function createPalette() {
  let div = document.getElementById("palette");
  if (range.value == 3) {
    div.innerHTML = "<span><p></p></span>".repeat(3);
  } else if (range.value == 4) {
    div.innerHTML = "<span><p></p></span>".repeat(4);
  } else if (range.value == 5) {
    div.innerHTML = "<span><p></p></span>".repeat(5);
  } else if (range.value == 6) {
    div.innerHTML = "<span><p></p></span>".repeat(6);
  } else if (range.value == 7) {
    div.innerHTML = "<span><p></p></span>".repeat(7);
  } else if (range.value == 8) {
    div.innerHTML = "<span><p></p></span>".repeat(8);
  } else if (range.value == 9) {
    div.innerHTML = "<span><p></p></span>".repeat(9);
  } else if (range.value == 10) {
    div.innerHTML = "<span><p></p></span>".repeat(10);
  }
}

function randomColor() {
  return (
    "#" +
    ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(
      -6
    )
  );
}

function randomPastel() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function randomDark() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function colorsDefault() {
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

function colorsPastel() {
  if (span.length == 3) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
  } else if (span.length == 4) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
  } else if (span.length == 5) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
    var e = (span[4].style.backgroundColor = randomPastel());
  } else if (span.length == 6) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
    var e = (span[4].style.backgroundColor = randomPastel());
    var f = (span[5].style.backgroundColor = randomPastel());
  } else if (span.length == 7) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
    var e = (span[4].style.backgroundColor = randomPastel());
    var f = (span[5].style.backgroundColor = randomPastel());
    var g = (span[6].style.backgroundColor = randomPastel());
  } else if (span.length == 8) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
    var e = (span[4].style.backgroundColor = randomPastel());
    var f = (span[5].style.backgroundColor = randomPastel());
    var g = (span[6].style.backgroundColor = randomPastel());
    var h = (span[7].style.backgroundColor = randomPastel());
  } else if (span.length == 9) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
    var e = (span[4].style.backgroundColor = randomPastel());
    var f = (span[5].style.backgroundColor = randomPastel());
    var g = (span[6].style.backgroundColor = randomPastel());
    var h = (span[7].style.backgroundColor = randomPastel());
    var i = (span[8].style.backgroundColor = randomPastel());
  } else if (span.length == 10) {
    var a = (span[0].style.backgroundColor = randomPastel());
    var b = (span[1].style.backgroundColor = randomPastel());
    var c = (span[2].style.backgroundColor = randomPastel());
    var d = (span[3].style.backgroundColor = randomPastel());
    var e = (span[4].style.backgroundColor = randomPastel());
    var f = (span[5].style.backgroundColor = randomPastel());
    var g = (span[6].style.backgroundColor = randomPastel());
    var h = (span[7].style.backgroundColor = randomPastel());
    var i = (span[8].style.backgroundColor = randomPastel());
    var j = (span[9].style.backgroundColor = randomPastel());
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

function colorsDark() {
  if (span.length == 3) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
  } else if (span.length == 4) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
  } else if (span.length == 5) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
    var e = (span[4].style.backgroundColor = randomDark());
  } else if (span.length == 6) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
    var e = (span[4].style.backgroundColor = randomDark());
    var f = (span[5].style.backgroundColor = randomDark());
  } else if (span.length == 7) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
    var e = (span[4].style.backgroundColor = randomDark());
    var f = (span[5].style.backgroundColor = randomDark());
    var g = (span[6].style.backgroundColor = randomDark());
  } else if (span.length == 8) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
    var e = (span[4].style.backgroundColor = randomDark());
    var f = (span[5].style.backgroundColor = randomDark());
    var g = (span[6].style.backgroundColor = randomDark());
    var h = (span[7].style.backgroundColor = randomDark());
  } else if (span.length == 9) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
    var e = (span[4].style.backgroundColor = randomDark());
    var f = (span[5].style.backgroundColor = randomDark());
    var g = (span[6].style.backgroundColor = randomDark());
    var h = (span[7].style.backgroundColor = randomDark());
    var i = (span[8].style.backgroundColor = randomDark());
  } else if (span.length == 10) {
    var a = (span[0].style.backgroundColor = randomDark());
    var b = (span[1].style.backgroundColor = randomDark());
    var c = (span[2].style.backgroundColor = randomDark());
    var d = (span[3].style.backgroundColor = randomDark());
    var e = (span[4].style.backgroundColor = randomDark());
    var f = (span[5].style.backgroundColor = randomDark());
    var g = (span[6].style.backgroundColor = randomDark());
    var h = (span[7].style.backgroundColor = randomDark());
    var i = (span[8].style.backgroundColor = randomDark());
    var j = (span[9].style.backgroundColor = randomDark());
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
  h2.style.marginTop = "20px";
}

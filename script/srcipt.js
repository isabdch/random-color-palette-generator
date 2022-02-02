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

function removeE() { // function to prevent variable generate has two events and get errors.
  let newGenerate = generate.cloneNode();
  newGenerate.innerHTML = "Generate";
  generate.replaceWith(newGenerate);
  generate = newGenerate;
  generate.addEventListener("click", createPalette);
}

function DefaultS() { // if checked, default radio button will show default colors.
  removeE();
  Default.setAttribute("checked", true);
  if ((Default.checked = true)) {
    generate.addEventListener("click", colorsDefault);
    generate.addEventListener("click", height);
  }
}

function darkS() { // if checked, dark radio button will show dark colors.
  removeE();
  dark.setAttribute("checked", true);
  if ((dark.checked = true)) {
    generate.addEventListener("click", colorsDark);
    generate.addEventListener("click", height);
  }
}

function pastelS() { // if checked, pastel radio button will show pastel colors.
  removeE();
  pastel.setAttribute("checked", true);
  if ((pastel.checked = true)) {
    generate.addEventListener("click", colorsPastel);
    generate.addEventListener("click", height);
  }
}

generate.addEventListener("click", colorsDefault);

generate.addEventListener("click", height);

function createPalette() { // create span with colors.
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

function randomColor() { // create random default colors.
  return (
    "#" +
    ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(
      -6
    )
  );
}

function randomPastel() { // create random pastel colors.
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function randomDark() { // create random dark colors.
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function colorsDefault() { // put default colors on span.
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
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
  } else if (span.length == 4) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
  } else if (span.length == 5) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
  } else if (span.length == 6) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
  } else if (span.length == 7) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
  } else if (span.length == 8) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
  } else if (span.length == 9) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
    p[8].innerHTML = `<a onmouseover="this.style.color= '${i}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${i.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${i}</a>`;
  } else if (span.length == 10) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
    p[8].innerHTML = `<a onmouseover="this.style.color= '${i}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${i.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${i}</a>`;
    p[9].innerHTML = `<a onmouseover="this.style.color= '${j}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${j.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${j}</a>`;
  }
}

function colorsPastel() { // put pastel colors on span.
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
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
  } else if (span.length == 4) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
  } else if (span.length == 5) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
  } else if (span.length == 6) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
  } else if (span.length == 7) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
  } else if (span.length == 8) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
  } else if (span.length == 9) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
    p[8].innerHTML = `<a onmouseover="this.style.color= '${i}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${i.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${i}</a>`;
  } else if (span.length == 10) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
    p[8].innerHTML = `<a onmouseover="this.style.color= '${i}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${i.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${i}</a>`;
    p[9].innerHTML = `<a onmouseover="this.style.color= '${j}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${j.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${j}</a>`;
  }
}

function colorsDark() { // put dark colors on span.
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
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
  } else if (span.length == 4) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
  } else if (span.length == 5) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
  } else if (span.length == 6) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
  } else if (span.length == 7) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
  } else if (span.length == 8) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
  } else if (span.length == 9) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
    p[8].innerHTML = `<a onmouseover="this.style.color= '${i}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${i.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${i}</a>`;
  } else if (span.length == 10) {
    p[0].innerHTML = `<a onmouseover="this.style.color= '${a}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${a.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${a}</a>`;
    p[1].innerHTML = `<a onmouseover="this.style.color= '${b}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${b.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${b}</a>`;
    p[2].innerHTML = `<a onmouseover="this.style.color= '${c}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${c.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${c}</a>`;
    p[3].innerHTML = `<a onmouseover="this.style.color= '${d}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${d.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${d}</a>`;
    p[4].innerHTML = `<a onmouseover="this.style.color= '${e}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${e.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${e}</a>`;
    p[5].innerHTML = `<a onmouseover="this.style.color= '${f}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${f.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${f}</a>`;
    p[6].innerHTML = `<a onmouseover="this.style.color= '${g}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${g.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${g}</a>`;
    p[7].innerHTML = `<a onmouseover="this.style.color= '${h}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${h.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${h}</a>`;
    p[8].innerHTML = `<a onmouseover="this.style.color= '${i}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${i.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${i}</a>`;
    p[9].innerHTML = `<a onmouseover="this.style.color= '${j}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${j.replace("#", "")}&rlz=1C1ISCS_pt-PTBR980BR980&sourceid=chrome&ie=UTF-8">${j}</a>`;
  }
}

function height() { // when the button generate is clicked, h2 goes up (and consequently the rest of the elements).
  h2.style.animation = "goUp 0.4s ease 0s 1 normal both";
}

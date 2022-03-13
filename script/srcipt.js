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

function removeE() {
  // function to prevent variable generate has two events and get errors.
  let newGenerate = generate.cloneNode();
  newGenerate.innerHTML = "Generate";
  generate.replaceWith(newGenerate);
  generate = newGenerate;
  generate.addEventListener("click", createPalette);
}

function DefaultS() {
  // if checked, default radio button will show default colors.
  removeE();
  Default.setAttribute("checked", true);
  if ((Default.checked = true)) {
    generate.addEventListener("click", colorsDefault);
    generate.addEventListener("click", animation);
  }
}

function darkS() {
  // if checked, dark radio button will show dark colors.
  removeE();
  dark.setAttribute("checked", true);
  if ((dark.checked = true)) {
    generate.addEventListener("click", colorsDark);
    generate.addEventListener("click", animation);
  }
}

function pastelS() {
  // if checked, pastel radio button will show pastel colors.
  removeE();
  pastel.setAttribute("checked", true);
  if ((pastel.checked = true)) {
    generate.addEventListener("click", colorsPastel);
    generate.addEventListener("click", animation);
  }
}

generate.addEventListener("click", colorsDefault);

generate.addEventListener("click", animation);

function createPalette() {
  // create span with colors.
  let div = document.getElementById("palette");
  div.innerHTML = "<span><p></p></span>".repeat(range.value);
}

function randomColor() {
  // create random default colors.
  return (
    "#" +
    ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(
      -6
    )
  );
}

function randomPastel() {
  // create random pastel colors.
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function randomDark() {
  // create random dark colors.
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function colorsDefault() {
  // put default colors on span.
  for (let i of span) {
    let color = randomColor();
    i.style.backgroundColor = color;
    i.children[0].innerHTML = `<a onmouseover="this.style.color= '${color}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${color.replace(
      "#",
      ""
    )}">${color}</a>`;
  }
}

function colorsPastel() {
  // put pastel colors on span.
  for (let i of span) {
    let color = randomPastel();
    i.style.backgroundColor = color;
    i.children[0].innerHTML = `<a onmouseover="this.style.color= '${color}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${color.replace(
      "#",
      ""
    )}">${color}</a>`;
  }
}

function colorsDark() {
  // put dark colors on span.
  for (let i of span) {
    let color = randomDark();
    i.style.backgroundColor = color;
    i.children[0].innerHTML = `<a onmouseover="this.style.color= '${color}'" onmouseout="this.style.color= 'black'" class="hexLink" target="_blank" href="https://www.google.com/search?q=%23${color.replace(
      "#",
      ""
    )}">${color}</a>`;
  }
}

function animation() {
  h2.style.animation = "goUp 0.4s ease 0s 1 normal both";
  let body = document.querySelector("body");
  body.style.animation = "overflowBody 0.1s ease 0.4s 1 normal both";
}

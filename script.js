// Javascript Code
// TECH1101: Personal Website
// by: Glenn Perez

// Code for Themeswitch
const backgrounColorSet1 = 'rgb(41, 41, 41)';
const color1Set1 = 'rgb(255, 220, 18)';
const color2Set1 = 'rgb(191, 191, 191)';
const color3Set1 = 'white';
const color4Set1 = 'black';
const backgrounColorSet2 = 'white';
const color1Set2 = 'rgb(44, 191, 170)';
const color2Set2 = 'black'
const color3Set2 = 'rgb(140, 140, 140)';
const color4Set2 = 'white';
let themeSwitch = document.getElementById("themeButton");

onload = getTheme;

function getTheme() {
  let globalTheme = localStorage.getItem("theme");
  let lightMode = (globalTheme == "true");
  themeSwitch.checked = lightMode;
  changeTheme(lightMode);
}

themeSwitch.onclick = setTheme;

function setTheme() {
  lightMode = this.checked;
  changeTheme(lightMode);
  localStorage.setItem("theme", lightMode);
}

function changeTheme(lightMode) {
  let color1 = document.getElementsByClassName("coloredText1");
  let color2 = document.getElementsByClassName("coloredText2");
  let color3 = document.getElementsByClassName("coloredText3");
  let color4 = document.getElementsByClassName("coloredText4");
  let colorBackground = document.getElementsByClassName("coloredBackground");
  let lineBreak = document.getElementsByClassName("lineBreak");

  if (lightMode == false) {
    document.body.style.backgroundColor = backgrounColorSet1;
    for (let line of lineBreak) {
      line.style.color = color1Set1;
    }
    for (let colorBGnd of colorBackground) {
      colorBGnd.style.backgroundColor = color1Set1;
    }
    for (let colorText1 of color1) {
      colorText1.style.color = color1Set1;
    }
    for (let colorText2 of color2) {
      colorText2.style.color = color2Set1;
    }
    for (let colorText3 of color3) {
      colorText3.style.color = color3Set1;
    }
    for (let colorText4 of color4) {
      colorText4.style.color = color4Set1;
    }
  } else {
    document.body.style.backgroundColor = backgrounColorSet2;
    for (let line of lineBreak) {
      line.style.color = color1Set2;
    }
    for (let colorBGnd of colorBackground) {
      colorBGnd.style.backgroundColor = color1Set2;
    }
    for (let colorText1 of color1) {
      colorText1.style.color = color1Set2;
    }
    for (let colorText2 of color2) {
      colorText2.style.color = color2Set2;
    }
    for (let colorText3 of color3) {
      colorText3.style.color = color3Set2;
    }
    for (let colorText4 of color4) {
      colorText4.style.color = color4Set2;
    }
  }
  selectedPage(lightMode);
}

// Highlight menu of selected page
function selectedPage(lightMode) {
  let pages = document.getElementsByClassName('navText');
  for (let page of pages) {
    activebar = page.href.split("/").pop();
    activePage = window.location.href.split("/").pop();

    if (activebar == activePage) {
      if (lightMode == false) {
        page.style.color = color1Set1;
      } else {
        page.style.color = color1Set2;
      }
    }
  }
}


// Code for mouse hover
let menuKeys = document.getElementsByClassName('navText');
for (let key of menuKeys) {
  activebar = key.href.split("/").pop();
  activePage = window.location.href.split("/").pop();

  if (activebar != activePage) {
    key.onmouseover = Hover;
    key.onmouseleave = Leave;
  }
}

let links = document.getElementsByClassName('link');
for (let link of links) {
  link.onmouseover = Hover;
  link.onmouseleave = Leave;
}

function Hover() {
  if (themeSwitch.checked) {
    this.style.color = color1Set2;
  } else {
    this.style.color = color1Set1;
  }
}

function Leave() {
  if (themeSwitch.checked) {
    this.style.color = color2Set2;
  } else {
    this.style.color = color2Set1;
  }
}

// Code for Typewriter Effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Development Student.", "Certified LABView Developer.", "Software Engineer.", "Lifelong Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1500);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Code for Photogallery
let count1 = 0;
let count2 = 0;
let count3 = 0;
let project1Img = document.getElementById("projectTemicImages");
let project2Img = document.getElementById("projectDoleImages");
let project3Img = document.getElementById("projectEscImages");
let proj1ImgPrev = document.getElementById("proj1ImgPrev");
let proj1ImgNext = document.getElementById("proj1ImgNext");
let proj2ImgPrev = document.getElementById("proj2ImgPrev");
let proj2ImgNext = document.getElementById("proj2ImgNext");
let proj3ImgPrev = document.getElementById("proj3ImgPrev");
let proj3ImgNext = document.getElementById("proj3ImgNext");

proj1ImgPrev.onclick = PrevImgProj1;
proj1ImgNext.onclick = NextImgProj1;
proj2ImgPrev.onclick = PrevImgProj2;
proj2ImgNext.onclick = NextImgProj2;
proj3ImgPrev.onclick = PrevImgProj3;
proj3ImgNext.onclick = NextImgProj3;

function NextImgProj1() {
  count1 = (count1 + 1) % 4;
  if (count1 > 3) count1 = 0;
  s1 = "proj1_img" + count1 + ".png";
  project1Img.src = s1;
}

function PrevImgProj1() {
  count1 = count1 - 1;
  if (count1 < 0) count1 = 3;
  s1 = "proj1_img" + count1 + ".png";
  project1Img.src = s1;
}

function NextImgProj2() {
  count2 = (count2 + 1) % 4;
  if (count2 > 3) count2 = 0;
  s2 = "proj2_img" + count2 + ".png";
  project2Img.src = s2;
}

function PrevImgProj2() {
  count2 = count2 - 1;
  if (count2 < 0) count2 = 3;
  s2 = "proj2_img" + count2 + ".png";
  project2Img.src = s2;
}

function NextImgProj3() {
  count3 = (count3 + 1) % 5;
  if (count3 > 4) count3 = 0;
  s3 = "proj3_img" + count3 + ".png";
  project3Img.src = s3;
}

function PrevImgProj3() {
  count3 = count3 - 1;
  if (count3 < 0) count3 = 4;
  s3 = "proj3_img" + count3 + ".png";
  project3Img.src = s3;
}
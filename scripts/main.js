let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/白豚紫色.jpg") {
    myImage.setAttribute("src", "images/蓝白豚-圆.png");
  } else {
    myImage.setAttribute("src", "images/白豚紫色.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
    console.log("main.js is loaded");
  } else {
    let storedName = localStorage.getItem("name");
    /*myHeading.textContent = "Mozilla 酷毙了，" + storedName;*/
}

myButton.onclick = function () {
    setUserName();
  };
  

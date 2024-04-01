let myHeading = document.querySelector("h1");
let myBtn = document.querySelector("button");
let nameKey = "nameKey";

function setUserName() {
    let myName = prompt("请输入你的名字");
    localStorage.setItem(nameKey, myName);
    if (!myName) {
        myName = "用户未输入"
    }
    myHeading.textContent = "Welcome " + myName;
}

myBtn.onclick = function () {
    setUserName();
};

let saveName = localStorage.getItem(nameKey);
// alert(typeof saveName);
if (saveName === null || saveName === "null") {
    setUserName();
} else {
    // alert(saveName);
    myHeading.textContent = "Welcome " + saveName;
}

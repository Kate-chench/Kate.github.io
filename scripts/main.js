let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dog-1.jpg') {
        myImage.setAttribute('src', 'images/dog-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/dog-1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '可爱的狗子们欢迎你，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '可爱的狗子们欢迎你，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
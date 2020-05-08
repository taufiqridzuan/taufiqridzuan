let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lone.png'){
        myImage.setAttribute ('src', 'images/Heraldique.png');
    }else{
        myImage.setAttribute ('src','images/lone.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName == null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Alone and Dangerous, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Alone and Dangerous, ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}
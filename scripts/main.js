let myImg = document.querySelector('img');
myImg.onclick = () =>{
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/horse.jpg'){
        myImg.setAttribute('src','images/myImg2.jpg');
    } else {
        myImg.setAttribute('src', 'images/horse.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if(myName){
        localStorage.setItem('name', myName);
        myHeading.textContent = 'You Are Cool, '+ myName;
    } else {
        setUserName();
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    storedName = localStorage.getItem('name');
    myHeading.textContent = 'You Are Cool, '+ storedName;
}

myButton.onclick = function (){
    setUserName();
}


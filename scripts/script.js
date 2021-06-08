var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bmw1.jpg') {
      myImage.setAttribute ('src','images/bmw2.jpg');
    } else {
      myImage.setAttribute ('src','images/bmw1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ', you love BMW.';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ', you love BMW.';
}

myButton.onclick = function() {
  setUserName();
}
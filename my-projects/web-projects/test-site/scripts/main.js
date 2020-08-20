let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pro-eagle.png') {
      myImage.setAttribute('src','images/fish-eagle.png');
    } else {
      myImage.setAttribute('src','images/hunt-eagle.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
  myButton.onclick = function() {
    setUserName();
  }
  
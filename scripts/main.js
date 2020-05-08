let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-img1.png') {
      myImage.setAttribute ('src','images/img2.jpg');
    } else {
      myImage.setAttribute ('src','images/test-img1.png');
    }
}

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Love u 3000, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Love u 3000, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

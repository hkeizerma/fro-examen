let modal1 = document.getElementById('regModal');
let btn1 = document.getElementById('regBtn');
let span1 = document.getElementsByClassName('close')[0];

console.log('hoi');

btn1.onclick = function () {
    modal1.style.display = 'block';
};

span1.onclick = function () {
    modal1.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
};

let modal2 = document.getElementById('loginModal');
let btn2 = document.getElementById('loginBtn');
let span2 = document.getElementsByClassName('close')[1];

console.log('hoi');

btn2.onclick = function () {
    modal2.style.display = 'block';
};

span2.onclick = function () {
    modal2.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
};
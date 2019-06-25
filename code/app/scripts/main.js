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


window.onscroll = function () {fixHeader()};
let header = document.getElementById('header');
let sticky = header.offsetTop;

function fixHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}


function initMap() { // The location of Middenwaard
    let Middenwaard = {lat: 52.663029, lng: 4.828409};
    let map = new google.maps.Map( document.getElementById('map'), {zoom: 6, center: Middenwaard});
    let marker = new google.maps.Marker({position: Middenwaard, map: map}); }
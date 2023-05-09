const btnRed = document.querySelector('#btn1');
const btnBlue = document.querySelector('.btn2');
const btnClear = document.querySelector('.remove-color');
const btnJump = document.querySelector('.btn3');
const colorfullSquere = document.querySelector('.color');
const btnplus = document.querySelector('#btnplus');
const btnminus = document.querySelector('#btnminus');
const colorfullSquereText = document.querySelector('.color');
let currentFontSize = 20;
let pickedcolor = document.getElementById('textcolorpicker');

function redColor() {
	colorfullSquere.classList.remove('blue');
	colorfullSquere.classList.toggle('red');
}

function blueColor() {
	colorfullSquere.classList.remove('red');
	colorfullSquere.classList.toggle('blue');
}

function clearColor() {
	colorfullSquere.classList.remove('blue');
	colorfullSquere.classList.remove('red');
}

function animateSquere() {
	colorfullSquere.classList.add('bounce-top');
	setInterval(function () {
		colorfullSquere.classList.remove('bounce-top');
	}, 1500);
}

function sizeUp() {
	if (currentFontSize < 65) {
		currentFontSize += 5;
	}
	colorfullSquere.style.fontSize = currentFontSize + 'px';
}

function sizeDown() {
	if (currentFontSize > 5) {
		currentFontSize -= 5;
	}
	colorfullSquere.style.fontSize = currentFontSize + 'px';
}

function setTextColor() {
	colorfullSquere.style.color = pickedcolor.value;
}

btnRed.addEventListener('click', redColor);
btnBlue.addEventListener('click', blueColor);
btnClear.addEventListener('click', clearColor);
btnJump.addEventListener('click', animateSquere);
btnplus.addEventListener('click', sizeUp);
btnminus.addEventListener('click', sizeDown);
pickedcolor.addEventListener('input', setTextColor);

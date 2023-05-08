const btnRed = document.querySelector('#btn1');
const btnBlue = document.querySelector('.btn2');
const btnClear = document.querySelector('.remove-color');
const btnJump = document.querySelector('.btn3');
const colorfullSquere = document.querySelector('.color');

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

btnRed.addEventListener('click', redColor);
btnBlue.addEventListener('click', blueColor);
btnClear.addEventListener('click', clearColor);
btnJump.addEventListener('click', animateSquere);

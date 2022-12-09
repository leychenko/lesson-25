'use strict';


const search = document.querySelector('.search');

document.addEventListener("click", searschFunc);

function searschFunc(e){
	if (e.target.closest('.search__button')){
		search.classList.toggle('_active');
	}
	if (!e.target.closest('.search')){
		search.classList.remove('_active');
	}
}

const txtInput = document.querySelector('.search__input');
const txtInputLimit = txtInput.getAttribute('maxlength');
const txtCounter = document.querySelector('.search__counter span');
txtCounter.innerHTML = txtInputLimit;

txtInput.addEventListener('keyup', counter);
txtInput.addEventListener('keydown', function (event) {
	if (event.repeat) counter();
});

function counter() {
	const counterResult = txtInputLimit - txtInput.value.length;
	txtCounter.innerHTML = counterResult;
}

document.addEventListener("keyup", function(e){
	if(e.code === 'Escape'){
		search.classList.remove('_active');
	}
})



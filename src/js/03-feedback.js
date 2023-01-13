import throttle from 'lodash.throttle';
	
	const form = document.querySelector(`.feedback-form`);
	const emailForm = document.querySelector(`input`);
	const textarea = document.querySelector(`textarea`);
	
	const STORAGE_KEY = "feedback-form-state"
	
	const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
	
	form.addEventListener(`submit`, onFormSubmit);
	form.addEventListener(`input`, throttle(onTextareaInput, 500));
	
	populateTextarea();
	
	
	function onFormSubmit(evt) {
	evt.preventDefault();
	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
	}
	
	function onTextareaInput(evt) {
	
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
	formData[evt.target.name] = evt.target.value;
	
	}
	
	function populateTextarea() {
	const savedMessage = localStorage.getItem(STORAGE_KEY);
	const savedMessageParse = JSON.parse(savedMessage);
	
	if (savedMessageParse) {
	emailForm.value = savedMessageParse.email || '';
	textarea.value = savedMessageParse.message || '';
	}
	}



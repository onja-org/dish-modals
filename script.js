const btns = document.querySelectorAll('.showModal');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

const openModal = event => {
	outerModal.classList.add('open');
	// grab the info
	const card = event.target.closest('.card');
	const title = card.querySelector('h3').textContent;
	console.log(card.dataset);
	const { step1, step2, step3, img } = card.dataset;
	// put it on the modal
	const myHTML = `
            <h2>${title}</h2>
            <img src="${img}" alt="${title}"/>
            <ul>Steps : 
                <li>${step1}</li>
                <li>${step2}</li>
                <li>${step3}</li>
            </ul>
            <button class="modal-btn">See next recipe</button>
    `;
	innerModal.innerHTML = myHTML;
};

const closeModal = event => {
	const isOutside = !event.target.closest('.inner-modal');
	if (isOutside) {
		outerModal.classList.remove('open');
	}
};

const closeModalWithEscapeKey = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
};

const handleModalClick = event => {
	console.log(event);
};

window.addEventListener('keydown', closeModalWithEscapeKey);
outerModal.addEventListener('click', closeModal);
btns.forEach(button => button.addEventListener('click', openModal));

// event delegation
const handleModalButton = event => {
	if (event.target.matches('button.modal-btn')) {
		// see the next recipe
	}
};
window.addEventListener('click', handleModalButton);

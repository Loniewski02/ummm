const denyBtn = document.querySelector('.btn-n');
const acceptBtn = document.querySelector('.btn-y');
const mainImg = document.querySelector('.main-img');
const mainText = document.querySelector('.main-txt');
const txtInfo = document.querySelector('.txt');
const card = document.querySelector('.card');

const acceptedState = {
	text: 'Wiedziałem. 🥹<br><span class="soft">Kocham Cię</span> <span>❤️</span>',
	img: 'cute.gif',
};

const denyTexts = [
	'No weź…',
	'Na pewno?',
	'Ej serio?',
	'Jeszcze raz?',
	'Zastanów się 😏',
	'To nie była dobra decyzja',
	'Spróbuj ponownie',
	'Kliknięcie boli',
	'To przycisk żart',
	'Przemyślmy to razem',
	'Ja bym wybrał inaczej',
	'Masz jeszcze TAK obok',
	'Ten drugi wygląda lepiej 👀',
	'Nie uciekaj od szczęścia',
	'To ostatnia szansa (psychologiczna)',
	'Okej, ale czemu?',
	'Klikniesz TAK, zobaczysz',
	'Serio chcesz NIE?',
	'TAK jest większy z jakiegoś powodu',
	'Ten przycisk jest podejrzany',
];

let scalePlus = 1;
let scaleMinus = 1;
let denyCount = 0;
let snowInterval = null;

const createSnow = () => {
	const heart = document.createElement('i');
	heart.classList.add('snowflake');
	heart.textContent = '❤️';

	heart.style.left = Math.random() * 100 + '%';
	heart.style.animationDuration = Math.random() * 5 + 4 + 's';
	heart.style.opacity = Math.random();

	document.body.append(heart);

	setTimeout(() => heart.remove(), 8000);
};

const denyAction = () => {
	denyCount++;

	txtInfo.textContent = denyTexts[(denyCount - 1) % denyTexts.length];

	scalePlus += 0.02;
	scaleMinus /= 1.05;

	acceptBtn.style.transform = `scale(${scalePlus})`;
	denyBtn.style.transform = `scale(${scaleMinus})`;
};

const acceptAction = () => {
	card.classList.add('accepted');

	mainText.innerHTML = acceptedState.text;
	mainImg.src = acceptedState.img;

	denyBtn.style.display = 'none';
	acceptBtn.style.display = 'none';
	txtInfo.style.display = 'none';

	if (!snowInterval) {
		snowInterval = setInterval(createSnow, 220);
	}
};

denyBtn.addEventListener('click', denyAction);
acceptBtn.addEventListener('click', acceptAction);

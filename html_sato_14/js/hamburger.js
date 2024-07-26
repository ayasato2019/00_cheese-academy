"use strict";

export default function hamburgermenu() {
	const menuButton = document.getElementById('js-menuButton');
	const menu = document.getElementById('js-nav');
	const body = document.body;

	menuButton.addEventListener('click', (event) => {
		if (menu.classList.contains('active')) {
			menu.classList.remove('active');
			menuButton.classList.remove('active');
			body.classList.remove('no-scroll');
		} else {
			menu.classList.add('active');
			menuButton.classList.add('active');
			body.classList.add('no-scroll');
		}
	});
}

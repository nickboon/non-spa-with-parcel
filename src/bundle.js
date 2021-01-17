console.log('app.js loaded');

window.onload = function () {
	if (location.pathname === '/') location.pathname = '/index.html';

	if (location.pathname.endsWith('index.html')) import('./index').then();
	else if (location.pathname.endsWith('about.html')) import('./about').then();
};

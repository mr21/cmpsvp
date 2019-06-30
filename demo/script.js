"use strict";

window.onload = () => {
	const elMain = document.querySelector( "#main" ),
		elBtns = document.querySelectorAll( ".cmpsvp-btn" );

	elMain.onclick = () => console.log( "main.onclick" );
	elBtns.forEach( btn => {
		btn.onclick = () => console.log( "btn.onclick" );
	} );
};

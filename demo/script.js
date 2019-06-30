"use strict";

document.querySelector( "#main" ).onclick = e => {
	console.log("main.onclick", e.target)
};

document.querySelectorAll( ".cmpsvp-btn" ).forEach( btn => {
	btn.onclick = e => {
		console.log( "btn.onclick" );
		// btn.classList.add( "cmpsvp-btn-loading" );
		setTimeout( () => {
			btn.classList.remove( "cmpsvp-btn-loading" );
		}, 2000 );
	};
} );

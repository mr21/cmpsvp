"use strict";

function cmpsvpRippleFxInit( el ) {
	el.classList.add( "cmpsvp-rippleFx" );
	el.addEventListener( "click", cmpsvpRippleFxExec, false );
}

function cmpsvpRippleFxStop( el ) {
	const circ = el.querySelector( ".cmpsvp-rippleFx-circle" );

	clearTimeout( el.dataset.rippleTimeoutId );
	delete el.dataset.rippleTimeoutId;
	el.classList.remove( "cmpsvp-rippleFx-active" );
	circ && circ.remove();
}

function cmpsvpRippleFxExec( e ) {
	const el = e.currentTarget,
		circ = document.createElement( "span" ),
		bcr = el.getBoundingClientRect(),
		x = e.pageX - bcr.left,
		y = e.pageY - bcr.top;

	cmpsvpRippleFxStop( el );
	circ.className = "cmpsvp-rippleFx-circle";
	circ.style.left = x / bcr.width * 100 + "%";
	circ.style.top = y / bcr.height * 100 + "%";
	el.prepend( circ );
	el.classList.remove( "cmpsvp-rippleFx-active" );
	setTimeout( () => el.classList.add( "cmpsvp-rippleFx-active" ), 100 );
	el.dataset.rippleTimeoutId = setTimeout( cmpsvpRippleFxStop.bind( null, el ), 700 );
}

import cmpsvpRippleFxInit from "../src/cmpsvp-rippleFx.js";

class CMPSVPButton extends HTMLButtonElement  {
	constructor() {
		super();
		this.classList.add( "cmpsvp-btn" );
		this.innerHTML = `<span class="cmpsvp-btn-text">${ this.innerHTML }</span>`;
		this.addEventListener( "click", this._onclick.bind( this ) );
		Object.seal( this );

		cmpsvpRippleFxInit( this );
	}

	// private:
	_onclick( e ) {
		const cl = this.classList;

		if ( cl.contains( "cmpsvp-btn-disable" ) || cl.contains( "cmpsvp-btn-loading" ) ) {
			e.stopImmediatePropagation();
		}
	}
}

customElements.define( "cmpsvp-btn", CMPSVPButton, { extends: "button" } );

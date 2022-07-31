import React from 'react'
import "../css/submitted.css"
import { useNavigate , Link } from 'react-router-dom';


export default function Fromsubmitted() {
  
  // for restarting the animation
window.addEventListener("DOMContentLoaded",() => {
	const replay = document.getElementById("replay");
	let resetTimeout = null;
	let btnTimeout = null;
	// prevent keyboard interaction while the button is hidden
	const tempHideBtn = btn => {
		if (btn) {
			const btnCS = window.getComputedStyle(btn);
			let btnAnimDur = btnCS.getPropertyValue("animation-duration");

			btnAnimDur = +btnAnimDur.split("s")[0] * 1e3;
			btn.disabled = true;

			clearTimeout(btnTimeout);
			btnTimeout = setTimeout(() => {
				btn.disabled = false;
			}, btnAnimDur);
		}
	};

	if (replay) {
		let spinnerEls = [
			"circle",
			"worm-a",
			"worm-b"
		];
		spinnerEls = spinnerEls.map(e => document.querySelector(`.check-spinner__${e}`));
		// hide the button at start
		tempHideBtn(replay);

		replay.addEventListener("click",function() {
			// kill the animations
			spinnerEls.forEach(e => {
				e.style.animation = "none";
			});
			this.style.animation = "none";

			// restore them, hide the button again
			clearTimeout(resetTimeout);
			resetTimeout = setTimeout(() => {
				spinnerEls.forEach(e => {
					e.removeAttribute("style");
				});
				this.removeAttribute("style");
				tempHideBtn(this);
			}, 0);
		});
	}
});
  return (
    <div id='done' >
     
      <h3>Your form has been submitted Succesfully </h3  >
      <br />
      <svg class="check-spinner" viewBox="0 0 100 100" width="100px" height="100px">
	<defs>
		<linearGradient id="cs-grad-1" x1="0.5" y1="0" x2="0.5" y2="1">
			<stop offset="0%" stop-color="hsl(0,0%,100%)" />
			<stop offset="100%" stop-color="hsl(0,0%,80%)" />
		</linearGradient>
		<linearGradient id="cs-grad-2a" x1="0.5" y1="0" x2="0.5" y2="1" gradientTransform="rotate(90,0.5,0.5)">
			<stop offset="0%" stop-color="hsl(123,90%,55%)" />
			<stop offset="100%" stop-color="hsl(183,90%,25%)" />
		</linearGradient>
		<linearGradient id="cs-grad-2b" x1="0.5" y1="0" x2="0.5" y2="1">
			<stop offset="0%" stop-color="hsl(123,90%,55%)" />
			<stop offset="100%" stop-color="hsl(183,90%,25%)" />
		</linearGradient>
	</defs>
	<circle class="check-spinner__circle" cx="50" cy="50" r="0" fill="url(#cs-grad-1)" />
	<circle class="check-spinner__worm-a" cx="50" cy="50" r="46" fill="none" stroke="url(#cs-grad-2a)" stroke-width="8" stroke-linecap="round" stroke-dasharray="72.2 216.8" stroke-dashoffset="36.1" transform="rotate(-90,50,50)" />
	<path class="check-spinner__worm-b" d="M 17.473 17.473 C 25.797 9.15 37.297 4 50 4 C 75.4 4 96 24.6 96 50 C 96 75.4 75.4 96 50 96 C 24.6 96 4 75.4 4 50 C 4 44.253 6.909 36.33 12.5 35 C 21.269 32.913 35 50 35 50 L 45 60 L 65 40" fill="none" stroke="url(#cs-grad-2b)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0 0 72.2 341.3" />
</svg>

<button id='btn1'> <Link to='/pdf'  id='linked' >Download pdf</Link> </button>
    </div>
  )
}

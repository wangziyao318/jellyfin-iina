/*
 * Copyright 2023 Ziyao
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// reassign history.pushState as an event, using function wrapState
history.pushState = wrapState("pushState");
// initialize mediaHash
var mediaHash="";

// listen at pushState (i.e., URL change) and retrieve mediaHash from new URL
window.addEventListener("pushState", function() {
	let param = window.location.hash.split("?")[1].split("&")[0];
	if (param) {
		let args = param.split("=");
		if (args[0] == "id") {
			console.log("mediaHash = ", args[1]);
			mediaHash = args[1];
			// await page to load, then create an IINA button on it
			setTimeout(createButton, 1000);
        	}
	}
});

// rewrite history.pushState
function wrapState(action) {
	let raw = history[action];
	return function() {
		let wrapper = raw.apply(this, arguments);
		let e = new Event(action);
		e.stateInfo = {...arguments};
		window.dispatchEvent(e);
		return wrapper;
	};
}

// create an IINA button on the page, and remove the old one if applicable
function createButton() {
	let oldButton = document.querySelector("#iina");
	if (oldButton) oldButton.remove();
	// locate the place for inserting IINA button
	let mainDetailButtons = document.querySelector("#itemDetailPage:not(.hide) > div.detailPageWrapperContainer > div.detailPagePrimaryContainer > div.mainDetailButtons");
	if (mainDetailButtons) {
		let buttonHTML = `<div id ="iina"><button type="button" class="button-flat btnPlay detailButton emby-button" title="IINA" onclick="iina()"><div class="detailButton-content"><span class="material-icons detailButton-icon play_arrow"></span><div class="detailButton-text">IINA</div></div></button></div>`;
		// insert IINA button
		mainDetailButtons.insertAdjacentHTML("afterend", buttonHTML);
	}
}

// function called upon click
function iina() {
	let mediaURL = window.location.origin + "/Items/" + mediaHash + "/Download?api_key=" + ApiClient.accessToken();
	let iinaURL = `iina://weblink?url=${escape(mediaURL)}&new_window=1`;
	window.open(iinaURL, "_parent");
}

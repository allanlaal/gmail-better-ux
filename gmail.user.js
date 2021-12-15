// ==UserScript==
// @name         Gmail UX
// @namespace    alcom
// @version      0.1
// @description  Additional UX and UI changes for Gmail
// @match        https://mail.google.com/*
// @author       Allan Laal
// @grant        none
// ==/UserScript==

(async function(){
    /*** prepend "Gmail" to tab title:  **/
    setInterval(()=>{
        document.title = 'Gmail|' + document.title;
    },10000);

})();


// TODO:
// crashes page:
/*
const alcom_titleChangeObserver = new MutationObserver((mutations) => {
	  console.log('Observed title change. changing window title');
		document.title = 'Gmail|' + document.title;
});

alcom_titleChangeObserver.observe(document.querySelector("title"), {
  subtree: true,
  characterData: true,
  childList: true,
});
*/

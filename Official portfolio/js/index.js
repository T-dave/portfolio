const content = document.querySelector(".main-text");
const home = document.querySelector(".home");
const services = document.querySelector(".services");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const hire = document.querySelector(".hire");
const button = document.querySelectorAll(".button");
const test = document.querySelector("h1");

var  a = 0;
// checkkey = document.onkeydown;
// function checkkeey(e){
// 	e = e || window.event;
// 	if(e.keycode == '40'){
// 		alert('hiii');
// 		console.log('hiiiii')
// 	}
// }

// // document.addEventListener("keydown", function(e) {
// // 	switch(e.keycode) {
// // 		case 40:
// // 		alert('down');
// // 		break;
// // 		case 38:
// // 		alert('up');
// // 		break;
// // 	}

// // });
// document.onkeydown = function(e) {
// 	switch(e.keycode) {
// 		case 40:
// 		alert('down');
// 		break;
// 		case 38:
// 		alert('up');
// 		break;
// 	}

// };
function moveDown(){
	a+=1;
	if (a === 1) {
		skillDisplay()
	};
	if (a === 2) {
		serviceDisplay()
	};
	if (a === 3) {
		projectDisplay()
	};
	if (a === 4) {
		hireDisplay()
	};
	if (a === 5) {
		homeDisplay();
		a = 0
	};
}
function moveUp(){
	a-=1;
	if (a === 1) {
		skillDisplay()
	};
	if (a === 2) {
		serviceDisplay()
	};
	if (a === 3) {
		projectDisplay()
	};
	if (a === 4) {
		hireDisplay()
	};
	if (a === -1) {
		homeDisplay();
		a = 5
	};
}
var Key = {
  UP:     38,
  DOWN:   40
};

/**
 * old IE: attachEvent
 * Firefox, Chrome, or modern browsers: addEventListener
 */
function _addEventListener(evt, element, fn) {
  if (window.addEventListener) {
    element.addEventListener(evt, fn, false);
  }
  else {
    element.attachEvent('on'+evt, fn);
  }
}

function handleKeyboardEvent(evt) {
  if (!evt) {evt = window.event;} // for old IE compatible
  var keycode = evt.keyCode || evt.which; // also for cross-browser compatible

  var info = document.getElementById("info");
  switch (keycode) {
    case Key.UP:
      moveUp();
      break;
    case Key.DOWN:
      moveDown();
      break;
  }
}

_addEventListener('keydown', document, handleKeyboardEvent);


home.addEventListener("click", homeDisplay);
services.addEventListener("click", serviceDisplay);
skills.addEventListener("click", skillDisplay);
projects.addEventListener("click", projectDisplay);
hire.addEventListener("click", hireDisplay);
button[0].addEventListener("click", hireDisplay);
button[1].addEventListener("click", hireDisplay);

function homeDisplay(){
	content.innerHTML = "<p style='padding-top: 0;'>Hi...</p><p>My name is David Omotara</p><p>I'm a front end developer with a passion for pushing myself beyond my limts</p><button class='hire button' onclick = 'hireDisplay()'>Contact Me</button>";
	content.classList.remove('skl');
	home.classList.add('current');
	services.classList.remove('current');
	skills.classList.remove('current');
	projects.classList.remove('current');
	hire.classList.remove('current');
	console.log('hiiiiiii');
}
function serviceDisplay(){
	content.innerHTML = "<h3>My services include</h3><ul><li>Website Building</li><li>PSI to HTML</li><li>Code Correction/ Cleaning</li><li>Wordpress Development</li><li>Plugin Installation</li><li>HTML to Wordpress</li><li>Custom Wordpress Theme</li></ul><button class='hire button' onclick = 'hireDisplay()'>Contact Me</button>";
	content.classList.remove('skl');
	services.classList.add('current');
	home.classList.remove('current');
	skills.classList.remove('current');
	projects.classList.remove('current');
	hire.classList.remove('current');
	console.log('hiiiiiii');
}
function skillDisplay(){
	content.innerHTML = "<div id='hexagon' style='font-family: sans-serif;'>HTML</div><div id='hexagon' style='font-family: sans-serif;'>CSS</div><div id='hexagon' style='font-family: sans-serif;'>JAVASCRIPT</div><div id='hexagon' style='font-family: sans-serif;'>BOOTSTRAP</div><div id='hexagon' style='font-family: sans-serif;'>WORDPRESS</div><div id='hexagon' style='font-family: sans-serif;'>REACT</div><button class='hire button' onclick = 'hireDisplay()'>Contact Me</button>";
	// content.style.display = "grid";
	content.classList.add('skl');
	skills.classList.add('current');
	home.classList.remove('current');
	services.classList.remove('current');
	projects.classList.remove('current');
	hire.classList.remove('current');
	console.log('hiiiiiii');
}
function projectDisplay(){
	content.innerHTML = "<div class='pics'><a href='project/prj/new.html' target='_blank'><div class='container'><img src='img/prj/01.jpeg'><div class='overlay'><div class='text'>A simple color picker</div></div></div></a><a href='project/primax/index.html' target='_blank'><div class='container'><img src='img/prj/02.jpeg'><div class='overlay'><div class='text'>Primax care</div></div></div></a><a href='project/header/index2.html' target='_blank'><div class='container'><img src='img/prj/03.jpeg'><div class='overlay'><div class='text'>Custom made header</div></div></div></a><a href='project/sona/index.html' target='_blank'><div class='container'><img src='img/prj/04.jpeg'><div class='overlay'><div class='text'>Floufort Consulting service</div></div></div></a><a href='project/scrabbler/index.html' target='_blank'><div class='container'><img src='img/prj/05.jpeg'><div class='overlay'><div class='text'>Word Scrabbler</div></div></div></a><a href='project/portfolio/portfolio.html' target='_blank'><div class='container'><img src='img/prj/06.jpeg'><div class='overlay'><div class='text'>Custom made template</div></div></div></a></div>"
	content.classList.remove('skl');
	projects.classList.add('current');
	home.classList.remove('current');
	services.classList.remove('current');
	skills.classList.remove('current');
	hire.classList.remove('current');
	console.log('hiiiiiii');
}
function hireDisplay(){
	content.innerHTML = "<div class='form'><h2>Get in Touch</h2><form><div class='name-email'><div class='flex-form'>Name<br><input type='text' name='name' placeholder='Name'></div><div>Email<br><input type='text' name='email' placeholder='email'></div></div><div class='textarea'>Message<br><textarea>Message</textarea></div></form></div><button style='width: auto;' class='hire'>Send Message</button>";
	content.classList.remove('skl');
	hire.classList.add('current');
	home.classList.remove('current');
	services.classList.remove('current');
	skills.classList.remove('current');
	projects.classList.remove('current');
	console.log('hiiiiiii');
}
var button = document.getElementsByTagName("button")[0];
var text = document.getElementById("textinput");
var ul =  document.querySelector("ul");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("entireboy");
var css = document.querySelector("h3");
var combine = function(){
	var li =  document.createElement("li");
	li.appendChild(document.createTextNode(text.value));
	ul.appendChild(li);
	text.value = ""
}
button.addEventListener("click", function(){
	if(text.value.length > 0){
	combine();
}
	}
)

text.addEventListener("keypress", function(event){
	if(text.value.length > 0 && event.keyCode === 13){
	combine();
}
	}
)

 function setgradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";" ;
}
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);



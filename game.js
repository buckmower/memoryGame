$(document).ready(function(){
shuffleArray();
var timeoutID;
var points = 0;
function shuffleArray() {
var imagesArray = ["http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/cheese.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/eggs.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_blender.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/tea.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_collander.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_teapot.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/cheese.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/eggs.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_blender.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/tea.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_collander.gif",
		   "http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_teapot.gif"];
for (var i = imagesArray.length - 1; i > 0; i--) {
var randomNumber = Math.floor(Math.random() * (i + 1));
var temp = imagesArray[i];
imagesArray[i] = imagesArray[randomNumber];
imagesArray[randomNumber] = temp;
}
start(imagesArray);
}
function start(imagesArray) {
$("div.row div").each(function(i, el) {
$(el).html("<img src='"+imagesArray[i]+"'>");
$(el).children().addClass("hidden");
$(el).click(revealCards);
});
}
function revealCards() {
$("img", this).not(".done").removeClass("hidden").addClass("visible");
matchTest();
if ($("img.done").length > 11) {
timeoutID = window.setTimeout(elFin, 600);
}
}
function matchTest() {
if ($("img.visible").length == 2) {
if ($("img.visible").eq(0).attr("src") == $("img.visible").eq(1).attr("src")) {
$("img.visible").removeClass("visible").addClass("done");
points = points + 2;
return;
}
}
if ($("img.visible").length > 2) {
$("img.visible").not(".done").removeClass("visible").addClass("hidden");
points = points - 1;
return;
}
}
function elFin() {
$("img").addClass("done");
alert("You're done! You earned a score of "+ points +" points!");
}
$("input[type='button']").click(function(){
location.reload();
});
});
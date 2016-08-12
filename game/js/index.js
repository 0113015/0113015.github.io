$(document).ready(function() {
  
  $("#playButton").mouseenter(function() {
    $("#playButton").fadeTo("slow", 0.5);
  });
  
  $("#playButton").mouseleave(function() {
    $("#playButton").fadeTo("fast",1);
  });
  
$("#playButton").click( function() {                  
var ready = prompt("welcome to my game! are you ready to play?");

if (ready === "yes") {
  alert("let's go!");
} 

else if (ready === "no") {
  alert("play again =");
}

var question1 = prompt("you run into a celeb, do you ask for a autograph or faint?");

if (question1 === "autograph") {
  alert("let's go!");
} 

else if (question1 === "faint") {
  alert("play again =");
}

var question2 = prompt("you see evil cartoon villans come to life do you fight or run and call 911");

if (question2 ==="run and call 911") {
 alert("play again=");
}
   
 else if (question2=== "fight"){
   alert("lets go");}

var question3=prompt("your a police you are finding a perfect police dog what do you choose you have 2 dogs to choose from a rottweiler and a german sheperd");

  if (question3 === "rottweiler") {
    alert("play again");
  } else if (question3 === "german shepherd"){
    alert("let's go");
  }

var question4=prompt("you are a camaraman selena gomez and ariana grande both ask you to photograph for themwho do you choose");
if(question4 ==="selena gomez"){
  alert("lets go");
}
else if (question4==="ariana grande"){
  alert("play again");
}
});
    });
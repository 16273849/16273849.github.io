
var gamePattern = [];
var buttonColor = ["green","red","yellow","blue"];
var userClickedPattern = [];
var level = 0;
var i = 0;
var playGame = false;

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
      level++;
  return [randomNumber, level];
}

function gameMode(){
  var next = nextSequence();
  var nextColor = next[0];
      level = next[1];
      $("h1").text("Level "+level);
      playSound(buttonColor[nextColor]);
      gamePattern.push(buttonColor[nextColor]);
  // console.log("nextColor "+ nextColor);
}

//Checking
function checkPress(userChoosenColor){
    if (userChoosenColor === gamePattern[i]){
          i++;
          if(i === gamePattern.length){
            setTimeout(function (){gameMode();},1000 );
            i = 0;
          }
    }else{
          wrongPress();
          i=0;
    }
}

// Start game
// if(playGame==true){
$(document).keydown(function(){
  // playGame = true;
  setTimeout(function (){gameMode();},500 );
  // gameMode();

});
// }

//Play Game
// User Clicked
$(".btn").on("click", function(e){
    var userChoosenColor = e.target.id;
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
    // userClickedPattern.push(userChoosenColor);
    checkPress(userChoosenColor);
  // console.log(userClickedPattern);
});


function playSound(name){
     buttonName = "#"+name;
     $(buttonName).fadeOut(100).fadeIn(100);
     var audioFile1 = "sounds/"+name+".mp3";
     var audioUser = new Audio(audioFile1);
     audioUser.play();
     // console.log(name);
}

function animatePress(currentColor){
      var btnPress = "#"+currentColor;
      $(btnPress).addClass("pressed");
      setTimeout(function(){
        $(btnPress).removeClass("pressed");
      },100);
      // console.log(currentColor);
}

function wrongPress(){
      var wrongSound = "sounds/wrong.mp3";
      var wrongAudio = new Audio(wrongSound);
      wrongAudio.play();
      $("body").addClass("red");
      setTimeout(function(){
        $("body").removeClass("red");},1000);
      $("h1").text("Game Over!!!");
      setTimeout(function(){$("#wrong").addClass("wrong");}, 1000);
      setTimeout(jumping,1000);

}

function jumping(){
  location.replace("gameOver.html");
}

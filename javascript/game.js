$(document).ready(function(){

  //Start of the game
  var totalScore = 0;
  var wins =  0;
  var losses = 0;
  var rScore = 0;
  var numbers=[];
  var rnumber; 
  var numberSelected;
  var gameStarted = false;

  //resets values for new round
  function resetGame(){
      gameStarted ===true;
      rScore=0;
      numbers.length = 0;
      rnumber = 0;
      $("#roundScore").text(rnumber);
      $("#gameScore").text(rScore);
      gameSetup()
  };

  function initalGameSetup(){
    $("#roundScore").text(rnumber);
    $("#gameScore").text(rScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    for (i = 1; i<5; i++){
      var crystalBtn = $("<img>");
      var imagePath='images/'+i+'.jpg';
      crystalBtn.addClass("image crystal-button col-lg-3");
      crystalBtn.attr('attr',i);
      crystalBtn.attr('src',imagePath);
      crystalBtn.attr('id',crystalNumber());
      $("#crystalDetails").append(crystalBtn);
      matchNumber();
      }
  };

  function gameSetup(){
    for (i = 1; i<5; i++){
      cbtn="."+i;
      $(cbtn).attr('id',crystalNumber());
      matchNumber();
      }
  };
  //selects random number between 1 and 12 for each crystal
  function crystalNumber(){
    numberSelected = Math.floor(Math.random() * 11)+1;
    numberCheck(numberSelected);
    return numberSelected;
  };

  //checks to see if number has already been assigned to a crystal 
  function numberCheck(numberSelected){
    console.log("numberCheck", numberSelected);
    if(numbers.indexOf(numberSelected) === -1 ){
      numbers.push(numberSelected);
    } else {
      crystalNumber();
    }
  };

  //selects a random number between 19 and 120
  function matchNumber(){
    var numberSelected = Math.floor(Math.random() * 101)+19;
    rnumber = numberSelected;
    $("#roundScore").text(rnumber);
  };    

  // function checkWin(rscore);{
  function checkWin(rScore){
    if (rScore === rnumber){
      wins += 1;
      $("#wins").text(wins);
      resetGame();
    } else if (rScore > rnumber) {
      losses += 1;
      $("#losses").text(losses);
      resetGame();
    } 
  };

  //intiate game
  if(gameStarted) {
    resetGame();
  } else {
    initalGameSetup();
  };

    // create round
  $(".crystal-button").on("click",  function(){
  s = $(this).attr('id');
  rScore += parseInt(s);
  $("#gameScore").text(rScore);
  checkWin(rScore);
  });

});
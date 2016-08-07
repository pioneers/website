var numClicks = 0;

var pkmnclicker = $("#projDesc").click(function() {
  numClicks += 1;
  if (numClicks > 6){
    $("#projDesc").html("Hello world!");
  }
});

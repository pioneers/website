var banner = $("#homepage-banner");

var imageNames = ['bot', 'soccer', 'teamCrop', 'working'];
var imageIndex = Math.floor((Math.random() * imageNames.length));
var imageUrl = "assets/images/homepage-banners/" + imageNames[imageIndex] + ".jpg";


banner.css('background-image', 'url(' + imageUrl + ')');

var numClicks = 0;
var pkmnclicker = $("#pkmn").click(function() {
  numClicks += 1;
  if (numClicks > 6){
    $("html").load("/assets/pokemon.html");
  }
});

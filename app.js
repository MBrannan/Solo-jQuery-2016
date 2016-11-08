var redTotal = 0;
var yellowTotal = 0;
var greenTotal = 0;
var blueTotal = 0;

$(document).ready(function() {
  event.preventDefault();

  $(".color-button").click(function() {
    console.log("pls add");
    colorDecider($(this).data('color'));
    console.log();
  });

  //counts colors each time the respective button is pressed
  function colorDecider(color) {
    if(color == "red") {
      redTotal++;
      $("#red").text("Total red: " + redTotal);
    } else if (color == "yellow") {
      yellowTotal++;
      $("#yellow").text("Total yellow: " + yellowTotal);
    } else if (color == "green") {
      greenTotal++;
      $("#green").text("Total green: " + greenTotal);
    } else if (color == "blue") {
      blueTotal++;
      $("#blue").text("Total blue: " + blueTotal);
    }
    $(".container").append('<div class= "color-cube ' + color + '"></div>');
  }
});

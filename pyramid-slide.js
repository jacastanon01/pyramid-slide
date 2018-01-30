
var howHigh = document.getElementById("height");
var brickSymbol =document.getElementById("bricks");

howHigh.addEventListener("change", function(event) {
    slider();
    determineHeightAndThenDrawPyramid();
});
// set a handler function for the form's submission event

brickSymbol.addEventListener("change", function(event) {
    determineHeightAndThenDrawPyramid();
});

function slider() {
    var sliderNum = document.getElementById('sliding-height');
    sliderNum.innerHTML = howHigh.value;
}

function determineHeightAndThenDrawPyramid() {
    heightStr = howHigh.value;
    console.log(heightStr);
    height = parseInt(heightStr);
    drawPyramid(height);
}
/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += document.getElementById('bricks').value;
            //console.log(rowStr);
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

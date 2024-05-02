var canvasPos = {}
function createScaledCanvas(canvasScale) {
    var cnv = createCanvas(windowWidth*canvasScale, windowHeight*canvasScale);
    canvasPos.x = (windowWidth - width) / 2;
    canvasPos.y = (windowHeight - height) / 2;
    cnv.position(canvasPos.x, canvasPos.y);
}

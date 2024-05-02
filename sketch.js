var table, 
    grid,
    colourArray,
    res,
    cols,
    rows,
    genres,
    picked;
    genreNum = 6291;

function preload() {
    //table = loadTable('data/lego/colors.csv', 'csv', 'header');
    genres = loadJSON('data/music.json')
    
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    var i =  keys.length * Math.random() << 0
    return [
        keys[i], obj[keys[i]]
    ];
};

function setup() {    
    createScaledCanvas(0.9)

    //let s = genres[floor(random(genres.length))]
    //print(s)

    picked = randomProperty(genres)

    let embedElement = `<div style="float: right; width: ` + width + `px; height: ` + height + `px; margin-left 8px"><iframe style="width: ` + width + `px; height: ` + height + `px; border: 0px solid black" name="spotify" id="spotify" src="` + picked[1] + `" id="spotifylink">open in Spotify</a></div>`
    let emb = createElement("emb", embedElement)

    emb.position(canvasPos.x, canvasPos.y)

    /*let a = createA(picked[1], picked[0]);
    a.size(100, 200)
    a.position(canvasPos.x + width/1.5, canvasPos.y + height/2);

    a.style('color', '#ffffff')*/
}

function mousePressed() {
}

function draw() {
    background(100)

}
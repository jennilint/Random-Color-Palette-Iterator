function random_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor
};

function createHexValue(){
    var removeRgbStringStart = random_color().replace("rgb(", "");
    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
    var splitRgbString = removeRgbStringEnd.split(",");
    var splitRgbInteger = splitRgbString.map((i) => Number(i));
    var hexValue = rgbToHex(splitRgbInteger)
    return hexValue
}

function rgbToHex(values){
    var r = values[0]
    var g = values[1]
    var b = values[2]
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

function changeBlockText() {
    for (i = 0; i < 5; i++) {
        document.getElementById("animationBlock" + [i]).innerHTML = createHexValue();
    };
};

function changeBlockColor() {
    for (i = 0; i < 5; i++) {
        document.getElementById("animationBlock" + [i]).style.backgroundColor = random_color();
        document.getElementById("animationBlock" + [i]).style.fontFamily = "Wagon";
        document.getElementById("animationBlock" + [i]).style.color = random_color();
        document.getElementById("animationBlock" + [i]).style.textAlign = "center";
        //document.getElementById("animationBlock" + [i]).style.outline = "0px solid black";
    };
};

function changeTextColor() {
    document.getElementById("tagline").style.color = random_color();
}

function animateBlock(){
    setInterval(changeBlockColor, 2700)
    //setInterval(changeBlockText, 2700)
    //setInterval(changeTextColor, 3200)
};

animateBlock()


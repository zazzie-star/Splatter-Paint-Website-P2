//paint on click variables
let paintOnClickMode = false;
let isMouseDown = false;

//paint on click functions!
var tool = new Tool();

tool.onMouseDown = function(event) {
    window.isMouseDown = true;
}
tool.onMouseUp = function(event) {
    window.isMouseDown = false;
}

tool.onMouseMove = function(event) {
    //this is for the paint on click button
    if (window.paintOnClickMode && !window.isMouseDown) {
        return;
    }

    // this draws the circles!
    var path = new Path.Circle({
        center: event.middlePoint,
        radius: Math.round(Math.random() * 25) + 5
    })
    // this makes them different colours!
    path.fillColor = {
        hue: event.count * 3,
        saturation: 1,
        brightness: 1
    }
}

//okay so in paper js tool is the object that listens for mouse and keyboards on events!
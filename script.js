function onMouseMove(event) {
    // this draws the circles!
    var path = new Path.Circle({
        center: event.middlePoint,
        radius: 10
    })
    // this makes them different colours!
    path.fillColor = {
        hue: 0,
        saturation: 1,
        brightness: 1
    }
}
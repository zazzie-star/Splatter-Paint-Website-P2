function onMouseMove(event) {
    var path = new Path.Circle({
        center: event.middlePoint,
        radius: Math.round(Math.random() * 25) + 5
    })
    path.fillColor = {
        hue: Math.random() * 360,
        saturation: 1,
        brightness: 1
    }
}
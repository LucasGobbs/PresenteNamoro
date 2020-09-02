var type = /webgl/
var two = new Two({
    type: webgl_support() ? Two.Types.webgl : Two.Types.svg,
    fullscreen: true,
    autostart: true
}).appendTo(document.body);



document.body.addEventListener("click", () => {
    rain.onClick()
}, false);

let background = two.makeGroup();

let foreground = two.makeGroup();
let rain = new Rain();

two.bind('update', function () {

    TWEEN.update();
    rain.update(two.timeDelta);
});

function webgl_support() {
    try {
        var canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
        return false;
    }
};
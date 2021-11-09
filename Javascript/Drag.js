var div = document.getElementById('target');
var getStyle = function (ele) { return window.getComputedStyle(ele); };
var getTransform = function () {
    var divStyle = document.createElement('div').style;
    var transformType = ['transform', 'webkitTransform', 'MozTransform', 'OTransform'];
    var result = transformType.filter(function (transform) { return transform in divStyle; });
    return (result === null || result === void 0 ? void 0 : result[0]) || null;
};
var getPosition = function (style, transform) {
    var transformValue = style[transform];
    if (transformValue === 'none') {
        return { x: 0, y: 0 };
    }
    else {
        var getNumberValue = transformValue.match(/-?\d+/g);
        return {
            x: Number(getNumberValue[4]),
            y: Number(getNumberValue[5])
        };
    }
};
var setPosition = function (ele, position) {
    console.log(position);
    ele.style[getTransform()] = "translate(" + position.x + "px, " + position.y + "px)";
};
var startX = 0;
var startY = 0;
var targetX = 0;
var targetY = 0;
div.addEventListener('mousedown', mouseDown, false);
function mouseDown(e) {
    startX = e.pageX;
    startY = e.pageY;
    var transform = getPosition(getStyle(div), getTransform());
    targetX = transform.x;
    targetY = transform.y;
    div.addEventListener('mousemove', mouseMove, false);
    div.addEventListener('mouseup', mouseUp, false);
}
function mouseMove(e) {
    setPosition(div, {
        x: targetX + e.pageX - startX,
        y: targetY + e.pageY - startY
    });
}
function mouseUp() {
    div.removeEventListener('mousemove', mouseMove);
    div.removeEventListener('mouseup', mouseUp);
}

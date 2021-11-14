var Drag = /** @class */ (function () {
    function Drag(target) {
        this.target = document.getElementById(target);
        this.transform = this.getTransform();
        this.init();
    }
    Drag.prototype.getStyle = function (property) {
        return window.getComputedStyle(this.target)[property];
    };
    Drag.prototype.getTransform = function () {
        var transformList = ['transform', 'webkitTransform', 'MozTransform', 'OTransform'];
        var divStyle = document.createElement('div').style;
        var result = transformList.filter(function (transform) { return transform in divStyle; });
        return result[0];
    };
    Drag.prototype.getPosition = function () {
        var transformMatrix = this.getStyle(this.transform);
        if (transformMatrix === 'none') {
            return { x: 0, y: 0 };
        }
        return {
            x: Number(transformMatrix.match(/-?\d+/g)[4]),
            y: Number(transformMatrix.match(/-?\d+/g)[5])
        };
    };
    Drag.prototype.setPosition = function (position) {
        this.target.style[this.transform] = "translate(" + position.x + "px, " + position.y + "px)";
    };
    Drag.prototype.init = function () {
        var _this = this;
        var dragging = false;
        var dragEnd = function () {
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);
            dragging = false;
        };
        var dragMove = function (e) {
            if (!dragging)
                return;
            var dragDistanceX = e.pageX - _this.dragStartX;
            var dragDistanceY = e.pageY - _this.dragStartY;
            _this.setPosition({
                x: _this.targetX + dragDistanceX,
                y: _this.targetY + dragDistanceY
            });
        };
        var dragStart = function (e) {
            _this.dragStartX = e.pageX;
            _this.dragStartY = e.pageY;
            _this.targetX = _this.getPosition().x;
            _this.targetY = _this.getPosition().y;
            dragging = true;
        };
        this.target.addEventListener('mousedown', dragStart, false);
        this.target.addEventListener('mousemove', dragMove, false);
        this.target.addEventListener('mouseup', dragEnd, false);
    };
    return Drag;
}());

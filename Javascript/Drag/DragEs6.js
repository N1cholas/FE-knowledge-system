var Drag = /** @class */ (function () {
    function Drag(targetID) {
        this.target = document.getElementById(targetID);
        this.transform = this.getTransform();
        this.init();
    }
    Drag.prototype.getTransform = function () {
        var _a;
        var divStyle = document.createElement('div').style;
        var transformList = ['transform', 'webkitTransform', 'MozTransform', 'OTransform'];
        var transformKey = (_a = transformList.filter(function (transform) { return transform in divStyle; })) === null || _a === void 0 ? void 0 : _a[0];
        return transformKey ? transformKey : '';
    };
    Drag.prototype.getStyle = function (property) {
        var targetStyle = window.getComputedStyle(this.target);
        return targetStyle[property];
    };
    Drag.prototype.getPosition = function () {
        var transformValue = this.getStyle(this.transform);
        if (transformValue === 'none') {
            return { x: 0, y: 0 };
        }
        else {
            var transformX = transformValue.match(/-?\d+/g)[4];
            var transformY = transformValue.match(/-?\d+/g)[5];
            return { x: Number(transformX), y: Number(transformY) };
        }
    };
    Drag.prototype.setPosition = function (position) {
        var targetStyle = this.target.style;
        targetStyle[this.transform] = "translate(" + position.x + "px, " + position.y + "px)";
    };
    Drag.prototype.init = function () {
        var _this = this;
        var dragStart = function (e) {
            _this.x = _this.getPosition().x;
            _this.y = _this.getPosition().y;
            _this.startDragX = e.pageX;
            _this.startDragY = e.pageY;
            var dragMove = function (e) {
                _this.setPosition({
                    x: e.pageX - _this.startDragX + _this.x,
                    y: e.pageY - _this.startDragY + _this.y
                });
            };
            var dragEnd = function () {
                document.removeEventListener('mousemove', dragMove);
                document.removeEventListener('mouseup', dragEnd);
            };
            document.addEventListener('mousemove', dragMove, false);
            document.addEventListener('mouseup', dragEnd, false);
        };
        this.target.addEventListener('mousedown', dragStart, false);
    };
    return Drag;
}());

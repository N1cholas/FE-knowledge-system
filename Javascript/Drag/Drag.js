(function () {
    function Drag(target) {
        this.transformX = 0;
        this.transformY = 0;
        this.startDragX = 0;
        this.startDragY = 0;
        this.target = target;
        this.init();
    }
    function getTransform() {
        var _a;
        var transformList = ['transform', 'webkitTransform', 'MozTransform', 'OTransform'];
        var divStyle = document.createElement('div').style;
        return ((_a = transformList.filter(function (transform) { return transform in divStyle; })) === null || _a === void 0 ? void 0 : _a[0]) || null;
    }
    var transform = getTransform();
    Drag.prototype.getStyle = function (property) {
        var style = window.getComputedStyle(this.target);
        return style[property];
    };
    Drag.prototype.getPosition = function () {
        var transformValue = this.getStyle(transform);
        if (transformValue === 'none') {
            return {
                x: 0,
                y: 0
            };
        }
        else {
            var valueList = transformValue.match(/-?\d+/g);
            return {
                x: Number(valueList[4]),
                y: Number(valueList[5])
            };
        }
    };
    Drag.prototype.setPosition = function (position) {
        var targetStyle = this.target.style;
        targetStyle[transform] = "translate(" + position.x + "px, " + position.y + "px)";
    };
    Drag.prototype.init = function () {
        var self = this;
        function dragStart(e) {
            self.transformX = self.getPosition().x;
            self.transformY = self.getPosition().y;
            self.startDragX = e.pageX;
            self.startDragY = e.pageY;
            document.addEventListener('mousemove', dragMove, false);
            document.addEventListener('mouseup', dragEnd, false);
        }
        function dragMove(e) {
            self.setPosition({
                x: e.pageX - self.startDragX + self.transformX,
                y: e.pageY - self.startDragY + self.transformY
            });
        }
        function dragEnd() {
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);
        }
        this.target.addEventListener('mousedown', dragStart, false);
    };
    // @ts-ignore
    window.Drag = Drag;
})();

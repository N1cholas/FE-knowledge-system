var SeamlessScrolling = /** @class */ (function () {
    function SeamlessScrolling(scrollWrapper) {
        var _a;
        this.scrollWrapper = document.getElementById(scrollWrapper);
        this.itemWrapper = ((_a = this.scrollWrapper.children) === null || _a === void 0 ? void 0 : _a[0]) || null;
        this.mouseEnter = false;
        this.init();
    }
    SeamlessScrolling.prototype.init = function () {
        var _this = this;
        var x = 0;
        var matrixValue = window.getComputedStyle(this.itemWrapper)['transform'];
        if (matrixValue === 'none') {
            this.setTransform(0);
        }
        this.formatItems();
        this.itemWrapper.addEventListener('mouseenter', function () {
            _this.mouseEnter = true;
        });
        this.itemWrapper.addEventListener('mouseleave', function () {
            _this.mouseEnter = false;
            requestAnimationFrame(move);
        });
        var move = function () {
            if (x >= 1750) {
                _this.setTransform(0);
                x = 0;
            }
            _this.setTransform(++x);
            if (!_this.mouseEnter) {
                requestAnimationFrame(move);
            }
        };
        requestAnimationFrame(move);
    };
    SeamlessScrolling.prototype.formatItems = function () {
        var itemWrapper = this.itemWrapper;
        var cloneFirstElement = itemWrapper.children[0].cloneNode(true);
        itemWrapper.appendChild(cloneFirstElement);
    };
    SeamlessScrolling.prototype.setTransform = function (transformX) {
        var itemWrapper = this.itemWrapper;
        if (transformX) {
            itemWrapper.style['transform'] = "translateX(-" + transformX + "px)";
        }
        else {
            itemWrapper.style['transform'] = 'translateX(0)';
        }
    };
    return SeamlessScrolling;
}());

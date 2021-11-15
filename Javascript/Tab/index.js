var ACTIVE_CLASS = 'active';
var Tab = /** @class */ (function () {
    function Tab(tabWrapper) {
        this.tabWrapper = document.getElementById('tab-wrapper');
        this.tabHeaderWrapper = this.tabWrapper.getElementsByClassName('tab-header-wrapper');
        this.tabItemWrapper = this.tabWrapper.getElementsByClassName('tab-item-wrapper');
        this.init();
    }
    Tab.prototype.init = function () {
        var _a = this.getWrapperAndItsChildren(this.tabHeaderWrapper), tabHeader = _a[0], tabHeaderChildren = _a[1];
        var _b = this.getWrapperAndItsChildren(this.tabItemWrapper), tabItemWrapper = _b[0], tabItems = _b[1];
        tabItems[0].classList.add(ACTIVE_CLASS);
        tabHeader.addEventListener('click', function (e) {
            var activeIndex = tabHeaderChildren.indexOf(e.target);
            var activeTabItem = tabItems[activeIndex];
            activeTabItem.classList.add(ACTIVE_CLASS);
            tabItems
                .filter(function (tabItem, index) { return index !== activeIndex; })
                .forEach(function (tabItem) { return tabItem.classList.remove(ACTIVE_CLASS); });
        }, false);
    };
    Tab.prototype.getWrapperAndItsChildren = function (targetWrapper) {
        var target = [].slice.call(targetWrapper)[0];
        return [target, [].slice.call(target.children)];
    };
    return Tab;
}());

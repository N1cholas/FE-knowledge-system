
var MinStack = function() {
    this.s1 = []
    this.s2 = [Number.MAX_SAFE_INTEGER]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.s1.push(val)
    this.s2.push(
        Math.min(
            val,
            this.s2[this.s2.length - 1]
        )
    )
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s1.pop()
    this.s2.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1[this.s1.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s2[this.s2.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

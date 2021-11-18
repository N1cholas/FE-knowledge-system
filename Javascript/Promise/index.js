var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var MyPromise = function (executor) {
    var self = this;
    self.status = PENDING;
    self.onFulfilled = []; //成功的回调
    self.onRejected = []; //失败的回调
    //PromiseA+ 2.1
    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilled.forEach(function (fn) { return fn(); }); //PromiseA+ 2.2.6.1
        }
    }
    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(function (fn) { return fn(); }); //PromiseA+ 2.2.6.2
        }
    }
    try {
        executor(resolve, reject);
    }
    catch (e) {
        reject(e);
    }
};
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    //PromiseA+ 2.2.1 / PromiseA+ 2.2.5 / PromiseA+ 2.2.7.3 / PromiseA+ 2.2.7.4
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) { return value; };
    onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { throw reason; };
    var self = this;
    //PromiseA+ 2.2.7
    var promise2 = new MyPromise(function (resolve, reject) {
        if (self.status === FULFILLED) {
            //PromiseA+ 2.2.2
            //PromiseA+ 2.2.4 --- setTimeout
            setTimeout(function () {
                try {
                    //PromiseA+ 2.2.7.1
                    var x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                }
                catch (e) {
                    //PromiseA+ 2.2.7.2
                    reject(e);
                }
            });
        }
        else if (self.status === REJECTED) {
            //PromiseA+ 2.2.3
            setTimeout(function () {
                try {
                    var x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        else if (self.status === PENDING) {
            self.onFulfilled.push(function () {
                setTimeout(function () {
                    try {
                        var x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            });
            self.onRejected.push(function () {
                setTimeout(function () {
                    try {
                        var x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
};
function resolvePromise(promise2, x, resolve, reject) {
    var self = this;
    //PromiseA+ 2.3.1
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        var used_1; //PromiseA+2.3.3.3.3 只能调用一次
        try {
            var then = x.then;
            if (typeof then === 'function') {
                //PromiseA+2.3.3
                then.call(x, function (y) {
                    //PromiseA+2.3.3.1
                    if (used_1)
                        return;
                    used_1 = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, function (r) {
                    //PromiseA+2.3.3.2
                    if (used_1)
                        return;
                    used_1 = true;
                    reject(r);
                });
            }
            else {
                //PromiseA+2.3.3.4
                if (used_1)
                    return;
                used_1 = true;
                resolve(x);
            }
        }
        catch (e) {
            //PromiseA+ 2.3.3.2
            if (used_1)
                return;
            used_1 = true;
            reject(e);
        }
    }
    else {
        //PromiseA+ 2.3.3.4
        resolve(x);
    }
}

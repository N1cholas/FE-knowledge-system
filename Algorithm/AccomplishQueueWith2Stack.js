const CQueue = function () {
  this.s1 = []
  this.s2 = []
}

CQueue.prototype.appendTail = function (value) {
  this.s1.push(value)
}

CQueue.prototype.deleteHead = function () {
  if (!this.s2.length) {
    while (!this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  }

  if (!this.s2.length) {
    return -1
  } else {
    return this.s2.pop()
  }
}

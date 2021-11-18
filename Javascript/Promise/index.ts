enum PROMISE_STATUS {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'
}

class MyPromise {
  private fulfillQueue: Function[]
  private rejectQueue: Function[]
  private value: any
  private reason: any
  private status: PROMISE_STATUS

  constructor(executor) {
    executor(this.resolve.bind(this), this.reject.bind(this))
    this.fulfillQueue = []
    this.rejectQueue = []
    this.status = PROMISE_STATUS.PENDING
    this.value = null
  }

  resolve(value: any) {
    if (this.status !== PROMISE_STATUS.PENDING) return
    this.status = PROMISE_STATUS.FULFILLED
    this.value = value

    let onFulfilled = null
    while(onFulfilled = this.fulfillQueue.shift()) {
      onFulfilled()
    }
  }

  reject(reason: any) {
    if (this.status !== PROMISE_STATUS.PENDING) return
    this.status = PROMISE_STATUS.REJECTED
    this.reason = reason

    let onRejected = null
    while(onRejected = this.rejectQueue.shift()) {
      onRejected()
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }

    const promise2 =  new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS.FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
    })

    return promise2
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('reference error'))
    }

    if (x && (typeof x === 'object' || typeof x === 'function')) {
      const then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          this.resolvePromise(promise2, y, resolve, reject)
        }, reason => {
          reject(reason)
        })
      } else {
        resolve(x)
      }
    } else {
      resolve(x)
    }
  }
}

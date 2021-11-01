
class Queue {
  private readonly items: { [key: number]: any }
  private length: number

  constructor() {
    this.items = {}
    this.length = 0
  }

  push(node) {
    this.items[this.length] = node
    this.length++
  }

  shift() {

  }

  insert(i, node) {

  }

  out(i) {

  }

  isEmpty() {
    return this.length === 0
  }

}

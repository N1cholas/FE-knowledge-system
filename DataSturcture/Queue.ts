
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
    if (this.isEmpty()) return null

    const r = this.items[0]

    this.length--

    for (let i = 0; i < this.length; i++) {
      this.items[i] = this.items[i + 1]
    }

    delete this.items[this.length]

    return r
  }

  insert(i, node) {
    if (i > this.length - 1) this.push(node)

    for (let j = this.length - 1; j > i; j++) {
      this.items[j + 1] = this.items[j]
    }

    this.items[i] = node
    this.length++
  }

  out(i) {
    if (i > this.length - 1) return this.shift()

    for (let j = i; j < this.length - 1; j++) {
      this.items[j] = this.items[j + 1]
    }

    this.length--
  }

  isEmpty() {
    return this.length === 0
  }

}

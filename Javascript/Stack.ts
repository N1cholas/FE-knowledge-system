
class Stack {
  public readonly items: { [key: number]: any }
  public length: number

  constructor() {
    this.items = {}
    this.length = 0
  }

  push (node: any) {
    if (!this.items) return null

    this.items[this.length] = node

    this.length++
  }

  pop (node: any): any {
    if (!this.items || this.length === 0) return null

    this.length--

    const result = this.items[this.length]

    delete this.items[this.length]

    return result
  }

  peek () {
    if (!this.items || this.length === 0) return null

    return this.items[this.length - 1]
  }
}

type Position = {
  x: number,
  y: number
}

class Drag {
  private readonly target: HTMLElement
  private x: number
  private y: number
  private startDragX: number
  private startDragY: number
  private readonly transform: string

  constructor(targetID: string) {
    this.target = document.getElementById(targetID)
    this.transform = this.getTransform()
    this.init()
  }

  getTransform(): string {
    const divStyle: CSSStyleDeclaration = document.createElement('div').style
    const transformList: string[] = ['transform', 'webkitTransform', 'MozTransform', 'OTransform']

    const transformKey: string = transformList.filter(transform => transform in divStyle)?.[0]

    return transformKey ? transformKey : ''
  }

  getStyle(property: string): string {
    const targetStyle = window.getComputedStyle(this.target)

    return targetStyle[property]
  }

  getPosition(): Position {
    const transformValue = this.getStyle(this.transform)

    if (transformValue === 'none') {
      return {x: 0, y: 0}
    } else {
      const transformX = transformValue.match(/-?\d+/g)[4]
      const transformY = transformValue.match(/-?\d+/g)[5]

      return {x: Number(transformX), y: Number(transformY)}
    }
  }

  setPosition(position: Position): void {
    const targetStyle = this.target.style

    targetStyle[this.transform] = `translate(${position.x}px, ${position.y}px)`
  }

  init(): void {
    const dragStart = (e: MouseEvent): void => {
      this.x = this.getPosition().x
      this.y = this.getPosition().y
      this.startDragX = e.pageX
      this.startDragY = e.pageY


      const dragMove = (e: MouseEvent) => {
        this.setPosition({
          x: e.pageX - this.startDragX + this.x,
          y: e.pageY - this.startDragY + this.y
        })
      }

      const dragEnd = () => {
        document.removeEventListener('mousemove', dragMove)
        document.removeEventListener('mouseup', dragEnd)
      }

      document.addEventListener('mousemove', dragMove, false)
      document.addEventListener('mouseup', dragEnd, false)
    }

    this.target.addEventListener('mousedown', dragStart, false)

  }
}

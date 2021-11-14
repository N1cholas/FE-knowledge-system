type Position = {
  x: number,
  y: number
}


class Drag {
  private readonly target: HTMLElement
  private readonly transform: string
  private dragStartX: number
  private dragStartY: number
  private targetX: number
  private targetY: number

  constructor(target: string) {
    this.target = document.getElementById(target)
    this.transform = this.getTransform()
    this.init()
  }

  getStyle(property: string): string {
    return window.getComputedStyle(this.target)[property]
  }

  getTransform(): string {
    const transformList = ['transform', 'webkitTransform', 'MozTransform', 'OTransform']

    const divStyle: CSSStyleDeclaration = document.createElement('div').style

    const result = transformList.filter(transform => transform in divStyle)

    return result[0]
  }

  getPosition(): Position {
    const transformMatrix = this.getStyle(this.transform)

    if (transformMatrix === 'none') {
      return { x: 0, y: 0 }
    }

    return {
      x: Number(transformMatrix.match(/-?\d+/g)[4]),
      y: Number(transformMatrix.match(/-?\d+/g)[5])
    }
  }

  setPosition(position: Position): void {
    this.target.style[this.transform] = `translate(${position.x}px, ${position.y}px)`
  }

  init(): void {
    let dragging = false

    const dragEnd = () => {
      document.removeEventListener('mousemove', dragMove)
      document.removeEventListener('mouseup', dragEnd)
      dragging = false
    }

    const dragMove = (e: MouseEvent) => {
      if (!dragging) return

      const dragDistanceX = e.pageX - this.dragStartX
      const dragDistanceY = e.pageY - this.dragStartY

      this.setPosition({
        x: this.targetX + dragDistanceX,
        y: this.targetY + dragDistanceY,
      })
    }

    const dragStart = (e: MouseEvent) => {
      this.dragStartX = e.pageX
      this.dragStartY = e.pageY
      this.targetX = this.getPosition().x
      this.targetY = this.getPosition().y
      dragging = true
    }

    this.target.addEventListener('mousedown', dragStart, false)
    this.target.addEventListener('mousemove', dragMove, false)
    this.target.addEventListener('mouseup', dragEnd, false)
  }
}

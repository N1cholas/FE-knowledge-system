(function () {

  type Position = {
    x: number,
    y: number
  }

  function Drag(target: HTMLDivElement) {
    this.transformX = 0
    this.transformY = 0

    this.startDragX = 0
    this.startDragY = 0

    this.target = target

    this.init()
  }

  function getTransform(): string | null {
    const transformList = ['transform', 'webkitTransform', 'MozTransform', 'OTransform']

    const divStyle = document.createElement('div').style

    return transformList.filter(transform => transform in divStyle)?.[0] || null
  }

  const transform = getTransform()

  Drag.prototype.getStyle = function (property): string {
    const style = window.getComputedStyle(this.target)

    return style[property]
  }

  Drag.prototype.getPosition = function (): Position {
    const transformValue = this.getStyle(transform)

    if (transformValue === 'none') {
      return {
        x: 0,
        y: 0
      }
    } else {
      const valueList = transformValue.match(/-?\d+/g)

      return {
        x: Number(valueList[4]),
        y: Number(valueList[5])
      }
    }
  }

  Drag.prototype.setPosition = function (position: Position): void {
    const targetStyle = this.target.style

    targetStyle[transform] = `translate(${position.x}px, ${position.y}px)`
  }

  Drag.prototype.init = function (): void {
    const self = this

    function dragStart (e: MouseEvent) {
      self.transformX = self.getPosition().x
      self.transformY = self.getPosition().y
      self.startDragX = e.pageX
      self.startDragY = e.pageY
      document.addEventListener('mousemove', dragMove, false);
      document.addEventListener('mouseup', dragEnd, false);
    }

    function dragMove (e: MouseEvent) {
      self.setPosition({
        x: e.pageX - self.startDragX + self.transformX,
        y: e.pageY - self.startDragY + self.transformY
      })
    }

    function dragEnd() {
      document.removeEventListener('mousemove',  dragMove)
      document.removeEventListener('mouseup', dragEnd)
    }

    this.target.addEventListener('mousedown', dragStart, false)
  }

  // @ts-ignore
  window.Drag = Drag
})()

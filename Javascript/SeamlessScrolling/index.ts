
class SeamlessScrolling {
  private scrollWrapper: HTMLElement
  private readonly itemWrapper: Element
  private mouseEnter: boolean

  constructor(scrollWrapper: string) {
    this.scrollWrapper = document.getElementById(scrollWrapper)
    this.itemWrapper = this.scrollWrapper.children?.[0] || null
    this.mouseEnter = false
    this.init()
  }

  init() {
    let x = 0
    const matrixValue = window.getComputedStyle(this.itemWrapper)['transform']

    if (matrixValue === 'none') {
      this.setTransform(0)
    }

    this.formatItems()

    this.itemWrapper.addEventListener('mouseenter', () => {
      this.mouseEnter = true
    })

    this.itemWrapper.addEventListener('mouseleave', () => {
      this.mouseEnter = false
      requestAnimationFrame(move)
    })

    const move = () => {
      if (x >= 1750) {
        this.setTransform(0)
        x = 0
      }

      this.setTransform(++x)

      if (!this.mouseEnter) {
        requestAnimationFrame(move)
      }
    }

    requestAnimationFrame(move)
  }

  formatItems(): void {
    const itemWrapper = this.itemWrapper as HTMLElement

    const cloneFirstElement = itemWrapper.children[0].cloneNode(true)

    itemWrapper.appendChild(cloneFirstElement)
  }

  setTransform(transformX?: number): void {
    const itemWrapper = this.itemWrapper as HTMLElement
    if (transformX) {
      itemWrapper.style['transform'] = `translateX(-${transformX}px)`
    } else {
      itemWrapper.style['transform'] = 'translateX(0)'
    }
  }
}



type Transform = 'transform' | 'webkitTransform' | 'MozTransform' | 'OTransform'

type ElementPosition = {
  x: number,
  y: number
}

const div = document.getElementById('target')

const getStyle = (ele: HTMLElement): CSSStyleDeclaration => window.getComputedStyle(ele)

const getTransform = (): Transform | null => {
  const divStyle: CSSStyleDeclaration = document.createElement('div').style

  const transformType: Transform[] = ['transform', 'webkitTransform', 'MozTransform', 'OTransform']

  const result = transformType.filter(transform => transform in divStyle)

  return result?.[0] || null
}

const getPosition = (style: CSSStyleDeclaration, transform: Transform): ElementPosition => {
  const transformValue = style[transform]

  if (transformValue === 'none') {
    return { x: 0, y: 0 }
  } else {
    const getNumberValue: number[] = transformValue.match(/-?\d+/g)

    return {
      x: Number(getNumberValue[4]),
      y: Number(getNumberValue[5])
    }
  }
}

const setPosition = (ele: HTMLElement, position: ElementPosition): void => {
  console.log(position)
  ele.style[getTransform()] = `translate(${position.x}px, ${position.y}px)`
}

let startX = 0
let startY = 0
let targetX = 0
let targetY = 0

// div.addEventListener('mousedown', mouseDown, false)

function mouseDown(e: MouseEvent) {
  startX = e.pageX
  startY = e.pageY

  const transform = getPosition(getStyle(div), getTransform())

  targetX = transform.x
  targetY = transform.y

  div.addEventListener('mousemove', mouseMove, false)
  div.addEventListener('mouseup', mouseUp, false)
}

function mouseMove(e: MouseEvent) {
  setPosition(div,{
    x: targetX + e.pageX - startX,
    y: targetY + e.pageY - startY,
  })
}

function mouseUp() {
  div.removeEventListener('mousemove', mouseMove)
  div.removeEventListener('mouseup', mouseUp)
}


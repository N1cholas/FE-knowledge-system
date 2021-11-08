(function () {

  const getStyle = (ele: HTMLElement): CSSStyleDeclaration => window.getComputedStyle(ele)

  const getTransformType = (): string => {
    const divStyle: CSSStyleDeclaration = document.createElement('div').style

    const transformType = ['transform', 'webkitTransform', 'MozTransform', 'OTransform']

    const result = transformType.filter(transform => transform in divStyle)

    return result?.[0]
  }

  const getTransform = (style: CSSStyleDeclaration, transformType: string) => {

  }

  const setTransform = (position: { x: number, y: number }) => {

  }
})()

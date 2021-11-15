const ACTIVE_CLASS = 'active'

class Tab {
  private tabWrapper: HTMLElement
  private readonly tabHeaderWrapper: HTMLCollectionOf<Element>
  private readonly tabItemWrapper: HTMLCollectionOf<Element>

  constructor(tabWrapper: string) {
    this.tabWrapper = document.getElementById('tab-wrapper')
    this.tabHeaderWrapper = this.tabWrapper.getElementsByClassName('tab-header-wrapper')
    this.tabItemWrapper = this.tabWrapper.getElementsByClassName('tab-item-wrapper')

    this.init()
  }

  init(): void {
    const [tabHeader, tabHeaderChildren] = this.getWrapperAndItsChildren(this.tabHeaderWrapper)
    const [tabItemWrapper, tabItems] = this.getWrapperAndItsChildren(this.tabItemWrapper)

    tabItems[0].classList.add(ACTIVE_CLASS)

    tabHeader.addEventListener('click', (e: MouseEvent) => {
      const activeIndex = tabHeaderChildren.indexOf(<HTMLElement>e.target)

      const activeTabItem = tabItems[activeIndex]

      activeTabItem.classList.add(ACTIVE_CLASS)

      tabItems
        .filter((tabItem, index) => index !== activeIndex)
        .forEach(tabItem => tabItem.classList.remove(ACTIVE_CLASS))
    }, false)
  }

  getWrapperAndItsChildren(targetWrapper: HTMLCollectionOf<Element>): [HTMLElement, HTMLElement[]] {
    const target = [].slice.call(targetWrapper)[0]

    return [target, [].slice.call(target.children)]
  }
}

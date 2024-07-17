import lerp from "../../utils/lerp"
import clamp from "../../utils/clamp"

import GSAP from "gsap"


interface IDragScrollParameters {
  wrapper: string,
  item: string,
  element: string
}
export default class DragScroll {
  private _element: HTMLElement
  private _wrapper: HTMLElement
  private _items: NodeListOf<HTMLElement>
  maxScroll!: number
  progress!: number
  speed!: number
  oldX!: number
  playRate!: number
  x!: number
  draggable!: boolean
  x0!: number
  wrapWidth!: number

  constructor(config: IDragScrollParameters) {
    this._element = document.querySelector<HTMLElement>(config.element)!
    this._wrapper = document.querySelector<HTMLElement>(config.wrapper)!
    this._items = document.querySelectorAll<HTMLElement>(config.item)!

    this.init()
  }

  public init() {
    this.x = 0
    this.progress = 0
    this.speed = 0
    this.wrapWidth = 0;
    this.oldX = 0
    this.playRate = 0

    this.bindings()
    this.handleResize()
    this.events()
    this.raf()
  }

  public bindings() {
    [
      "handleResize",
      "handleTouchStart",
      "handleTouchEnd",
      "handleTouchMove",
      "move",
      "events",
      "raf",
    ].forEach(method => {
      this[method as keyof this] = (this[method as keyof this] as Function).bind(this)
    })
  }

  public handleResize() {
    this.wrapWidth = 0
    GSAP.utils
      .toArray<HTMLElement>(this._items)
      .forEach((item) => {
        this.wrapWidth += item.clientWidth + 10
      })

    this.progress = 0
    this._wrapper.style.width = `${this.wrapWidth}px`
    this.maxScroll = this.wrapWidth - this._element.clientWidth
  }

  public handleTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.draggable) return false

    let x: number;
    if (e instanceof MouseEvent) {
      x = e.clientX
    } else {
      x = e.touches[0].clientX
    }

    this.progress += (this.x0 - x) * 2.5
    this.x0 = x

    this.move()
  }

  public move() {
    this.progress = clamp(this.progress, 0, this.maxScroll)
  }

  public handleTouchStart(e: MouseEvent | TouchEvent) {
    e.preventDefault()
    this.draggable = true

    if (e instanceof TouchEvent) {
      this.x0 = e.touches[0].clientX
    } else {
      this.x0 = e.clientX
    }
  }

  public events() {
    window.addEventListener("resize", this.handleResize)

    this._element.addEventListener("touchstart", this.handleTouchStart)
    window.addEventListener("touchmove", this.handleTouchMove)
    window.addEventListener("touchend", this.handleTouchEnd)

    this._element.addEventListener("mousedown", this.handleTouchStart)
    this._element.addEventListener("mousemove", this.handleTouchMove)
    this._element.addEventListener("mouseup", this.handleTouchEnd)

    document.body.addEventListener("mouseleave", this.handleTouchEnd)
  }

  public handleTouchEnd() {
    this.draggable = false
  }

  public raf() {
    this.x = lerp(this.x, this.progress, 0.1)
    this.playRate = this.progress / this.maxScroll

    this._wrapper.style.transform = `translateX(${-this.x}px)`

    this.oldX = this.x
  }

}
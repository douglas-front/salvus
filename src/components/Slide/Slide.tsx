import { useEffect } from "react"
import DragScroll from "./DragScroll"


interface Props extends React.PropsWithChildren { }
export default function Slide({ children }: Props) {
  useEffect(() => {
    const slide = new DragScroll({
      element: "[data-slide-element]",
      wrapper: "[data-slide-wrapper]",
      item: "[data-slide-item]"
    })

    function raf() {
      slide.raf()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {

    }
  }, [])

  return children
}
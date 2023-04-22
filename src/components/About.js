import pro from "../assets/narcissa.png"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log("about in view:", isInView)
    const nextItem = document.getElementById("donut")
    // when gipf element out of view, getnew element and apply
    isInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")

  }, [isInView])

  return (
    <div>

      <div className="about" id="about" ref={ref}>
        <img src={pro} />
        <div className="about--infos">
          <h1>ABOUT DIV HERE</h1>
          <p>
            some example text i'm a full stack developer
            blah blah blah blah blah
          </p>
        </div>
      </div>

    </div>
  )
}

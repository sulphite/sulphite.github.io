import pro from "../assets/narcissa.png"

export default function About() {
  return (
    <div className="about" id="about">
      <img src={pro} />
      <div className="about--infos">
        <h1>ABOUT DIV HERE</h1>
        <p>
          some example text i'm a full stack developer
          blah blah blah blah blah
        </p>
      </div>
    </div>
  )
}

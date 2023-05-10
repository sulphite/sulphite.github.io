import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectInner = (props) => {
  return (
    <div className="project-inner">
      <div className="project-details">
        <h3>{props.data.title}</h3>
        {props.data.description.map(para => (<p>{para}</p>))}
      </div>
      <div className="project-details">
      <img src={props.data.image_url} className="project-image"/>
      <div className="flex-row end">
        <a href={props.data.github}><FontAwesomeIcon icon={faGithub} /> github</a>
        <a href={props.data.url}><FontAwesomeIcon icon={faLink} /> live demo</a>
      </div>
      <div className="flex-row end">
      {props.data.tools.map((item) => {
        return <span className="tool">{item}</span>
      })}
      </div>
      </div>
    </div>
  )
}

export default ProjectInner
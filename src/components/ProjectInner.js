import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectInner = (props) => {
  return (
    <div className="project-inner">
      <div>
      <img src={props.data.image_url} className="project-image"/>

      </div>
      <div className="project-details">
        <h3>{props.data.title}</h3>
        <p>{props.data.description}</p>
        <a href={props.data.github}><FontAwesomeIcon icon={faGithub} /> github</a>
        <a href={props.data.url}><FontAwesomeIcon icon={faLink} /> live project link</a>
      </div>
    </div>
  )
}

export default ProjectInner

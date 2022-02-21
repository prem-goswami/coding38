import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="projectContainer">
      <img src={imageUrl} alt={projectTitle} />
      <div className="headContainer">
        <p>{projectTitle}</p>
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <button type="button" href={projectUrl} className="butt">
        Visit
      </button>
    </div>
  )
}

export default ProjectTimelineCard

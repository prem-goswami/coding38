import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="courseContainer">
      <div className="titileContainer">
        <h1 className="title">{courseTitle}</h1>
        <p className="duration">{duration}</p>
      </div>
      <p className="description">{description}</p>
      <div className="taglistContainer">
        {tagsList.map(eachTag => (
          <li>{eachTag.name}</li>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard

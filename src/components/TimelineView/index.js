import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const items = [
  {
    date: '10 DECEMBER 2020',
  },
  {
    date: '21 DECEMBER 2021',
  },
]

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'Project') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }

  return (
    <div className="bgContainer">
      <p>MY JOURNEY OF</p>
      <h1>CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimeLineView

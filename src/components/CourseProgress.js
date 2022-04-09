const CourseProgress = ({ progress }) => {
  return (
    <>
      <p>You have completed {progress} of this course</p>
      <div className="total">
        <div style={{width: progress}} className="progress"></div>
      </div>
      <p>Estimated time remaining</p>
    </>
  )
}

export default CourseProgress;
const Preview = ({heading, paragraph, date, time, agenda }) => {
  return (
    <div className='section preview'>
      <div className='content'>
        <h2>{heading}</h2>
        <p className='intro'>{paragraph}</p>
        {date ? <p><strong>Date:</strong> {date}</p> : null}
        {time ? <p><strong>Time:</strong> {time}</p> : null}
        {agenda ? <h3>Agenda</h3> : null}
        {agenda ? agenda.map((a, i) => {
          return (
            <div key={i}>
              <p>{a.time}</p>
              <p>{a.topic}</p>
              <p>{a.speaker}</p>
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}

export default Preview;
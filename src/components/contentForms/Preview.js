import image from '../../icons/icon-woman-doctor-and-mask.svg';

const Preview = ({heading, paragraph, secParagraph, date, time, agenda, brands, therapyAreas, type }) => {

  return (
    <div className='section preview'>
      <div className='content'>
        <h2>{heading}</h2>
        {type === 'speaker' ? <img src={image} className='profile' alt='speaker' /> : null}
        {brands ? (
          <ul className="categories">
            {brands.map((b, i) => {
              return <li>{b}</li>
            })}
          </ul>
          ) : null
        }
        {therapyAreas ? (
          <ul className="categories">
            {therapyAreas.map((ta, i) => {
              return <li>{ta}</li>
            })}
          </ul>
          ) : null
        }
        {type === 'event' ? (
          <>
            <div className='video'></div>
            <div className="flex between">
              <p className='intro'>{paragraph}</p>
              <p className='bookmark'></p>
            </div>

          </>
        ) : (
          <p className='intro'>{paragraph}</p>
        )}
        { secParagraph ? <p>{secParagraph}</p> : null }
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
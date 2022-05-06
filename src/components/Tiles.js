import Image from '../components/common/Image';

const Tiles = ({ content }) => {


  return (
    <div className='content flex wrap between'>
      {content.map(c => {
        return (
          <div className="card">
            <figure>
              <Image width='200' height='200' />
            </figure>
            <div>
              <h2>{c.title}</h2>
              <p className='meta date'>{c.dateTime}</p>
              <p className='meta author'>{c.speaker} {c.speakerJob}</p>
              <p className='meta author'>{c.author}</p>
              <p className='meta duration'>{c.duration}</p>
              {c.rating ? (
                <ul className='rating'>
                  {c.rating.map(r => {
                    if (r) return <li className='star'></li>;
                    return <li></li>;
                  })}
              </ul>
              ) : null }
              <p>{c.description}</p>
              {content === 'event' ? <p className='button'>Register</p> : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tiles;
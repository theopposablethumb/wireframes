import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ContentForms = () => {
  return (
    <>
      <Helmet>
        <title>OncoConnect Content Kit</title>
      </Helmet>
      <div className='content'>
        <h2>OncoConnect Content Kit</h2>
        <p className='intro'>Build your content here, and generate a word document to pass on to Takeda</p>
        <ul>
          <li><Link to='./about-page'>About page</Link></li>
          <li><Link to='./new-events'>Event page</Link></li>
          <li><Link to='./past-events'>Past Event page</Link></li>
          <li><Link to='./resources-page'>Resources page</Link></li>
          <li><Link to='./speaker-page'>Speaker</Link></li>
          {/* <li><Link to='./upcoming-events'>Upcoming events</Link></li> */}
        </ul>
      </div>
    </>
  )
}

export default ContentForms;
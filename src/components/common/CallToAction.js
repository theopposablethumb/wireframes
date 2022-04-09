import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="section grey">
      <div className="content centered">
        <h2>This was really useful, what should I do next?</h2>
        <p>Ideally each page on a website should have a call to action of some kind. What do you want the user to do? Subscribe for more updates? Get more info from somewhere? Attend an event related to this video?</p>
        <Link className="button" to="/">Do something</Link>
      </div>
    </div>
  )
}

export default CallToAction;
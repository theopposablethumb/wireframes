import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Intro from '../components/Intro';
import CourseProgress from '../components/CourseProgress';
import CourseContents from '../components/CourseContents';
import SpeakerProfile from '../components/SpeakerProfile';

const Course = () => {
  return(
    <>
      <Helmet>
        <title>Course</title>
      </Helmet>
      <div className="section">
        <div className="hero flex course">
          <div className='twoThirds'>
            <Intro />
          </div>
          <div className='thirds courseProg'>
            <CourseProgress progress={'30%'} />
            <Link className="button" to="/">Continue Learning</Link>
          </div>
        </div>
      </div>
      <div className="section grey">
        <h2 className="centered">List of skills, knowledge areas in this course</h2>
        <div className="flex wrap">
          <ul>
            <li><strong>Each list item should be short</strong>, try to keep them to a single line</li>
            <li>Ideally each item <strong>should summarise something that is easy to follow</strong></li>
            <li><strong>Lists can be used</strong> for things that need to be checked</li>
            <li><strong>Or to summarise tasks</strong> that can be easily followed</li>
          </ul>
          <ul>
            <li><strong>Each list item should be short</strong>, try to keep them to a single line</li>
            <li>Ideally each item <strong>should summarise something that is easy to follow</strong></li>
            <li><strong>Lists can be used</strong> for things that need to be checked</li>
            <li><strong>Or to summarise tasks</strong> that can be easily followed</li>
          </ul>
        </div>
      </div>
      <CourseContents />
      <SpeakerProfile name="Brendan Meachen" role="Web Designer" />

    </>
  );
}

export default Course;
import { Helmet } from 'react-helmet';

import CallToAction from '../components/common/CallToAction';
import Intro from '../components/Intro';
import Video from '../components/Video';

const VideoPage = () => {
  return(
    <>
      <Helmet>
        <title>Video</title>
      </Helmet>
      <article className="video">
        <Intro />
        <div className="content">
          <Video />
          <p>Short optional description or context for this video, further enhancing the content of the video. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry. Minimum size is 16px</p>
          <ul>
            <li>00:00 - Introduction and summary</li>
            <li>00:30 - Summary of content at this time code, or the chapter</li>
            <li>2:30 - Summary of content at this time code, or the chapter</li>
            <li>4:40 - Outtro and summary</li>
          </ul>
          <p>Video transcript provided for accessibility purposes, primarily to assist users who are visual or hearing impaired. Ideally all videos should have an option for closed captions as well. Transcript details can be time coded, and should be easy to read.</p>
          <p>This means using new paragraphs for new sections. Dummy text is from Cupcake ipsum by the way. Mmmm, tasty. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry.</p>
        </div>
      </article>
      <CallToAction />
    </>
  );
}

export default VideoPage;
import { Helmet } from 'react-helmet';

import Intro from '../components/Intro';
import Image from '../components/common/Image';
import AsideStat from '../components/asides/AsideStat';
import AsideHeading from '../components/asides/AsideHeading';
import AsideList from '../components/asides/AsideList';
import CallToAction from '../components/common/CallToAction';


const Article = () => {
  return(
    <>
      <Helmet>
        <title>Article</title>
      </Helmet>
      <article>
        <Intro />
        <div className="content">
          <h2>Secondary heading</h2>
          <p>Keep paragraphs short and concise, ideally one idea per paragraph. This makes text easy to scan quickly. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry. Minimum size is 16px</p>
          <AsideStat />
          <p>Video transcript provided for accessibility purposes, primarily to assist users who are visual or hearing impaired. Ideally all videos should have an option for closed captions as well. Transcript details can be time coded, and should be easy to read.</p>
          <Image width="500" height="300" caption="Image caption, giving the image context" />
          <h3>Tertiary Heading</h3>
          <p>This means using new paragraphs for new sections. Dummy text is from Cupcake ipsum by the way. Mmmm, tasty. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry.</p>
          <ul>
            <li><strong>Each list item should be short</strong>, try to keep them to a single line</li>
            <li>Ideally each item <strong>should summarise something that is easy to follow</strong></li>
            <li><strong>Lists can be used</strong> for things that need to be checked</li>
            <li><strong>Or to summarise tasks</strong> that can be easily followed</li>
            <li>Try to keep lists no longer than <strong>4 - 6 items</strong>, for readability</li>
          </ul>
          <AsideHeading />
          <p>This means using new paragraphs for new sections. Dummy text is from Cupcake ipsum by the way. Mmmm, tasty. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry.</p>
          <h2>Secondary heading</h2>
          <p>This means using new paragraphs for new sections. Dummy text is from Cupcake ipsum by the way. Mmmm, tasty. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry.</p>
          <AsideList />
          <h3>Tertiary Heading</h3>
          <p>This means using new paragraphs for new sections. Dummy text is from Cupcake ipsum by the way. Mmmm, tasty. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry.</p>
        </div>
      </article>
      <CallToAction />
      {/* <Recommended type="articles" /> */}
    </>
  );
}

export default Article;
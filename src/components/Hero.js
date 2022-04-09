import Image from './common/Image';

const Hero = ({ image }) => {
  return (
    <div className="hero flex">
      <div className='twoThirds'>
        <h1>Primary heading, describes the webpage and persuades the user it is relevant to them</h1>
        <p className="intro">Introductory text that elaborates on the heading above, and provides a summary of the page and why it is useful. The primary heading and the introductory text should utilise SEO keywords, and be consistent with the page title and the page meta description.</p>
        <a className="button" href="https://brendanmeachen.com">Persuade me to do something</a>
      </div>
      <div className='thirds'>
      {image ? <Image width="750" height="400" /> : null}
      </div>

    </div>
  )
};

export default Hero;
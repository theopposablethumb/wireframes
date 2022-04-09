import Image from "./common/Image";

const HomeSection = ({ image, inline, bg }) => {
  return(
    <div className={`section ${bg}`}>
      <div className="content centered">
        <h2>Secondary heading (H2), describes the next section of the page content. Relevant to the content that follows.</h2>
        {image && inline ? <Image  width="500" height="200" /> : null}
        <p>Paragraph text that is relevant to the topic of this page and expands on the heading above. Sesame snaps sweet macaroon toffee oat cake toffee croissant. Pastry macaroon jujubes gummies toffee candy canes muffin pastry. Minimum size is 16px</p>
      </div>
        {image && !inline ? <Image  width="400" height="400" /> : null}
    </div>
  )
}

export default HomeSection;
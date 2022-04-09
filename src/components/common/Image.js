const Image = ({ width, height, caption }) => {
  return (
    <figure>
      <img src={`https://picsum.photos/${width}/${height}?grayscale`} alt="placeholder" />
      {caption ? (
        <figcaption>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default Image;
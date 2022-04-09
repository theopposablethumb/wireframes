const Video = ({ width, height }) => {
  return (
    <iframe width={width} height={height} src="https://www.youtube.com/embed/7wPJkSmHlCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default Video;
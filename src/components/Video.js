const Video = ({ width, height }) => {
  return (
    <iframe width={width} height={height} src="https://www.youtube.com/embed/9ZfN87gSjvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // <div
    //   style={{ position: 'relative', display: 'block', maxWidth: '960px' }}>
    //   <div
    //     style={{ paddingTop: '56.25%'}}>
    //     <iframe
    //       title="brightcove video"
    //       src="https://players.brightcove.net/pages/v1/index.html?accountId=3871979161001&playerId=DnkKsSZvR&videoId=6303595772001&bccumstomguid=NA&bctrackingid=GB"
    //       allowfullscreen=""
    //       allow="encrypted-media"
    //       style={{position: 'absolute', top: '0px', right: '0px', bottom: '0px', left: '0px', width: '100%', height: '100%' }}></iframe>
    //   </div>
    // </div>
    // <iframe width={width} height={height} src="https://www.youtube.com/embed/7wPJkSmHlCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default Video;
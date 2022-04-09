import { Link } from 'react-router-dom';

const AsideHeading = ({ cta, hlink }) => {
  return(
    <aside>
      <h3>Panel with summarised information</h3>
      <p>Paragraph of text providing information relevant to the article, with a clear action for the user. This paragraph should outline the benefit to the user of taking the desired action, how will it improve thier life? Keep this short and sweet, so it is easy to read</p>
      {cta ? (
        <Link to={`${hlink}`}>{cta}</Link>
      ) : null}
    </aside>
  )
}

export default AsideHeading;
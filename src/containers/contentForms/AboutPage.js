import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { generateDoc } from '../../helpers';

import '../../styles/forms.css';
import ContentKit from '../../components/contentForms/ContentKit';
import MetaForm from '../../components/contentForms/MetaForm';

const AboutPage = () => {
  const [headingLength, setHeadingLength] = useState(0);
  const [paragraphLength, setParagraphLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const [heading, setHeading] = useState('Primary heading, describes page, the website in general, and persuades the user it the content is relevant to them');
  const [paragraph, setParagraph] = useState('Introductory text that elaborates on the heading above, and provides a more detailed summary of the information they can expect to find on this website.');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const page = 'Past Events Page'
  const content = { title, description, heading, paragraph };

  return (
    <>
      <Helmet>
        <title>OncoConnect Content Kit - About Page</title>
      </Helmet>
      <ContentKit />
      <div className='section preview'>
        <div className='content'>
          <div className='textOverlay'>
            <figure>
              <img src='https://picsum.photos/800/300' alt='placeholder' />
            </figure>
            <h2>{heading}</h2>
            <p className='intro'>{paragraph}</p>
          </div>
        </div>
      </div>
      <div className='content'>
        <form className='content'>
          <label htmlFor='headingOne'>Primary Heading - <em>between 50 and 120 characters</em></label>
          <p>This will be the largest heading at the top of the page. It should describe the content of the page and topic covered, and be consistent with (but not a duplicate of) the Page Title. Good practice would be to provide the answer to a problem or question</p>
          <input type='text' name='headingOne'  onChange={e => {setHeadingLength(parseInt(e.target.value.length, 10)); setHeading(e.target.value) }}></input>
          <p className='charCount'>{headingLength} / 120</p>

          <label htmlFor='paragraph'>Paragraph - <em>between 200 and 300 characters</em></label>
          <p>This will be the paragraph underneath the primary heading. Use this to the page in more detail, and provide a high level summary of the overall conclusion or findings.</p>
          <textarea name='paragraph' rows='6' cols='80' onChange={e => {setParagraphLength(parseInt(e.target.value.length, 10)); setParagraph(e.target.value) }}></textarea>
          <p className='charCount'>{paragraphLength} / 300</p>

          <MetaForm setDescription={setDescription} setTitle={setTitle} setTitleLength={setTitleLength} setDescriptionLength={setDescriptionLength} titleLength={titleLength} descriptionLength={descriptionLength} />

          <button onClick={(e) => {generateDoc(e, content, page)}}>Generate a Word Doc</button>
        </form>
      </div>
    </>
  )
}

export default AboutPage;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { generateDoc } from '../../helpers';

import '../../styles/forms.css';
import ContentKit from '../../components/contentForms/ContentKit';
import MetaForm from '../../components/contentForms/MetaForm';
import Preview from '../../components/contentForms/Preview';

const Speaker = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [headingLength, setHeadingLength] = useState(0);
  const [paragraphLength, setParagraphLength] = useState(0);
  const [secParagraphLength, setSecParagraphLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const [heading, setHeading] = useState('Primary heading, describes page, the website in general, and persuades the user it the content is relevant to them');
  const [paragraph, setParagraph] = useState('Short summary of the speakers key credentials and qualifications, where they work, what they do, and their area of expertise');
  const [secParagraph, setSecParagraph] = useState('Detailed of the speakers professional biography, outlining their career and professional experience and how it relates to their speciality or area of expertise.');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const page = 'Past Events Page'
  const content = { title, description, heading, paragraph, secParagraph };
  const author = { name, email }

  return (
    <>
      <Helmet>
        <title>OncoConnect Content Kit - Resources Page</title>
      </Helmet>
      <ContentKit setEmail={setEmail} setName={setName} />
      <Preview heading={heading} paragraph={paragraph} secParagraph={secParagraph} />
      <div className='content'>
        <form className='content'>
          <label htmlFor='headingOne'>Primary Heading - <em>between 50 and 120 characters</em></label>
          <p>The speakers name, title, and any qualifications they have</p>
          <input type='text' name='headingOne'  onChange={e => {setHeadingLength(parseInt(e.target.value.length, 10)); setHeading(e.target.value) }}></input>
          <p className='charCount'>{headingLength} / 120</p>

          <label htmlFor='paragraph'>Introductory Paragraph - <em>between 300 and 400 characters</em></label>
          <p>Short summary of the speakers key credentials and qualifications, where they work, what they do, and their area of expertise.</p>
          <textarea name='paragraph' rows='6' cols='80' onChange={e => {setParagraphLength(parseInt(e.target.value.length, 10)); setParagraph(e.target.value) }}></textarea>
          <p className='charCount'>{paragraphLength} / 400</p>

          <label htmlFor='secParagraph'>Speaker biography - <em>approx. 500 - 1500 characters</em></label>
          <p>Detailed of the speakers professional biography, outlining their career and professional experience and how it relates to their speciality or area of expertise.</p>
          <textarea name='secParagraph' rows='6' cols='80' onChange={e => {setSecParagraphLength(parseInt(e.target.value.length, 10)); setSecParagraph(e.target.value) }}></textarea>
          <p className='charCount'>{secParagraphLength} / 1500</p>

          <MetaForm setDescription={setDescription} setTitle={setTitle} setTitleLength={setTitleLength} setDescriptionLength={setDescriptionLength} titleLength={titleLength} descriptionLength={descriptionLength} />

          <button onClick={(e) => {generateDoc(e, content, author, page)}}>Generate a Word Doc</button>
        </form>
      </div>
    </>
  )
}

export default Speaker;
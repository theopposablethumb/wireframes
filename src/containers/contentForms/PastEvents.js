import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { generateDoc, taxonomy } from '../../helpers';

import '../../styles/forms.css';

import ContentKit from '../../components/contentForms/ContentKit';
import MetaForm from '../../components/contentForms/MetaForm';
import Preview from '../../components/contentForms/Preview';



const PastEvents = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const [heading, setHeading] = useState('Describe the event in one sentence, and why it\'s important for me to watch it');
  const [headingLength, setHeadingLength] = useState(0);
  const [paragraph, setParagraph] = useState('Introductory text that elaborates on the heading above, and provides a summary of the video and the information I can expect to find and why it is useful for its intended audience. Inverted pyramid copy is best, provide a summary of the conclusion of the video so I can quickly decide if this video is relevant to me, and provides the information I am looking for.');
  const [paragraphLength, setParagraphLength] = useState(0);

  const [topic, setTopic] = useState('Haemato-Oncology');
  const [brands, setBrands] = useState([]);
  const [therapyAreas, setTherapyAreas] = useState([]);

  const page = 'Past Events Page'
  const content = { title, description, heading, paragraph, topic, brands, therapyAreas };

  const selectTopic = (e) => {
    setTopic(e.target.value);
    setBrands([]);
    setTherapyAreas([]);
  }

  const selectBrand = (b) => {
    if (!brands.includes(b)) {
      setBrands(brands => [...brands, b]);
    } else {
      setBrands(brands => brands.filter(brand => brand !== b))
    }
  }

  const selectTherapy = (ta) => {
    if (!therapyAreas.includes(ta)) {
      setTherapyAreas(therapyAreas => [...therapyAreas, ta]);
    } else {
      setTherapyAreas(therapyAreas => therapyAreas.filter(therapy => therapy !== ta ))
    }
  }

  const top = taxonomy.find(t => t.topic === topic);

  return (
    <>
      <Helmet>
        <title>OncoConnect Content Kit - Past Event page</title>
      </Helmet>
      <ContentKit />
      <Preview heading={heading} paragraph={paragraph} brands={brands} therapyAreas={therapyAreas} type={'event'} />

      <div className='content'>
        <form className='content'>
          <label htmlFor='headingOne'>Primary Heading - <em>between 50 and 120 characters</em></label>
          <p>This will be the largest heading at the top of the page. It should describe the content of the video and topic covered, and be consistent with (but not a duplicate of) the Page Title. Good practice would be to provide the answer to a problem or question</p>
          <input type='text' name='headingOne'  onChange={e => {setHeadingLength(parseInt(e.target.value.length, 10)); setHeading(e.target.value) }}></input>
          <p className='charCount'>{headingLength} / 120</p>

          <label htmlFor='paragraph'>Paragraph - <em>between 300 and 500 characters</em></label>
          <p>This will be the paragraph underneath the primary heading. Use this to summarise the event in more detail, and provide a high level summary of the overall conclusion or findings.</p>
          <textarea name='paragraph' rows='6' cols='80' onChange={e => {setParagraphLength(parseInt(e.target.value.length, 10)); setParagraph(e.target.value) }}></textarea>
          <p className='charCount'>{paragraphLength} / 500</p>

          <label htmlFor='taxonomy'>Select a Topic</label>
          <select name='taxonomy' onChange={(e) => selectTopic(e)}>
            {taxonomy.map((t, i) => {
              return <option value={t.topic} key={i}>{t.topic}</option>
            })}
          </select>
          <h3>Topic: {topic}</h3>
          <p>Brands</p>
          <ul className='categories'>
            {top.brands.map((b, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {selectBrand(b)}}
                  className={brands.includes(b) ? 'selected' : null}
                >{b}</li>
              )
            })}
            </ul>
            <p>Therapy Areas</p>
            <ul className='categories'>
            {top.therapyAreas.map((ta, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {selectTherapy(ta)}}
                  className={therapyAreas.includes(ta) ? 'selected' : null}
                >
                  {ta}
                </li>
              )
            })}
          </ul>
          <MetaForm setDescription={setDescription} setTitle={setTitle} setTitleLength={setTitleLength} setDescriptionLength={setDescriptionLength} titleLength={titleLength} descriptionLength={descriptionLength} />
          <button onClick={(e) => {generateDoc(e, content, page)}}>Generate a Word Doc</button>
        </form>
      </div>
    </>
  )
}

export default PastEvents;
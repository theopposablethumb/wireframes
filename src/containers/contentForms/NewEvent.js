import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { generateDoc } from '../../helpers';

import '../../styles/forms.css';

import ContentKit from '../../components/contentForms/ContentKit';
import MetaForm from '../../components/contentForms/MetaForm';
import Preview from '../../components/contentForms/Preview';



const NewEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const [heading, setHeading] = useState('Describe the event in one sentence, and why it\'s important for me to watch it');
  const [headingLength, setHeadingLength] = useState(0);
  const [paragraph, setParagraph] = useState('Introductory text that elaborates on the heading above, and provides a summary of the video and the information I can expect to find and why it is useful for its intended audience. Inverted pyramid copy is best, provide a summary of the conclusion of the video so I can quickly decide if this video is relevant to me, and provides the information I am looking for.');
  const [paragraphLength, setParagraphLength] = useState(0);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [agendaTopic, setAgendaTopic] = useState('');
  const [agendaTime, setAgendaTime] = useState('');
  const [agendaSpeaker, setAgendaSpeaker] = useState('');
  const [agendaItems, setAgendaItems] = useState([]);

  const page = 'Past Events Page'
  const content = { title, description, heading, paragraph, date, time, agendaItems };

  const addAgendaItem = (e) => {
    e.preventDefault();
    setAgendaItems([...agendaItems, {topic: agendaTopic, speaker: agendaSpeaker, time: agendaTime}])
  }

  return (
    <>
      <Helmet>
        <title>OncoConnect Content Kit - New Event page</title>
      </Helmet>
      <ContentKit />
      <Preview heading={heading} paragraph={paragraph} date={date} time={time} agenda={agendaItems} />

      <div className='content'>
        <form className='content'>
          <label htmlFor='headingOne'>Primary Heading - <em>between 50 and 120 characters</em></label>
          <p>This will be the largest heading at the top of the page. It should describe the content of the page and topic covered, and be consistent with (but not a duplicate of) the Page Title. Good practice would be to provide the answer to a problem or question</p>
          <input type='text' name='headingOne'  onChange={e => {setHeadingLength(parseInt(e.target.value.length, 10)); setHeading(e.target.value) }}></input>
          <p className='charCount'>{headingLength} / 120</p>

          <label htmlFor='paragraph'>Paragraph - <em>between 300 and 500 characters</em></label>
          <p>This will be the paragraph underneath the primary heading. Use this to summarise the event in more detail, and provide a high level summary of the overall conclusion or findings.</p>
          <textarea name='paragraph' rows='6' cols='80' onChange={e => {setParagraphLength(parseInt(e.target.value.length, 10)); setParagraph(e.target.value) }}></textarea>
          <p className='charCount'>{paragraphLength} / 500</p>

          <label htmlFor='date'>Date the event is due to take place in long format, for example Tuesday 17th May 2022</label>
          <input name='date' onChange={e => setDate(e.target.value) }></input>

          <label htmlFor='time'>The time the event due to take place in 24 hour format</label>
          <input name='time' onChange={e => setTime(e.target.value) }></input>

          <h3>Event Agenda</h3>
          <label htmlFor='agendaItem'>Topic to be discussed</label>
          <input name='agendaItem' onChange={e => setAgendaTopic(e.target.value) }></input>

          <label htmlFor='agendaSpeaker'>Speaker</label>
          <input name='agendaSpeaker' onChange={e => setAgendaSpeaker(e.target.value) }></input>

          <label htmlFor='agendaTime'>Agenda time in 24hr format</label>
          <input name='agendaTime' onChange={e => setAgendaTime(e.target.value) }></input>

          {agendaItems.map((a, i) => {
            return (
              <div key={i}>
                <label htmlFor='agendaItem'>Topic to be discussed</label>
                <input name='agendaItem' onChange={e => setAgendaTopic(e.target.value) }></input>

                <label htmlFor='agendaSpeaker'>Speaker</label>
                <input name='agendaSpeaker' onChange={e => setAgendaSpeaker(e.target.value) }></input>

                <label htmlFor='agendaTime'>Agenda time in 24hr format</label>
                <input name='agendaTime' onChange={e => setAgendaTime(e.target.value) }></input>
              </div>
            )
          })}

          <button onClick={e => addAgendaItem(e)}>Add agenda Item</button>

          <MetaForm setDescription={setDescription} setTitle={setTitle} setTitleLength={setTitleLength} setDescriptionLength={setDescriptionLength} titleLength={titleLength} descriptionLength={descriptionLength} />
          <button onClick={(e) => {generateDoc(e, content, page)}}>Generate a Word Doc</button>
        </form>
      </div>
    </>
  )
}

export default NewEvent;
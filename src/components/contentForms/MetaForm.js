const MetaForm = ({ setTitleLength, setTitle, setDescriptionLength, setDescription, titleLength, descriptionLength }) => {
  return (
    <div className='meta'>
      <h3>SEO Meta data</h3>
      <label htmlFor='pageTitle'>Page Title - <em>maximum 60 characters</em></label>
      <p>This will be the text for the clickable link that will appear in google search results <br />
      A short summary of the event topic and why it's beneficial for a potential for a site visitor. Include some SEO keywords that describe the topics on the agenda<br />
      Include '- oncoconnect' at the end of the title</p>
      <input name='pageTitle' onChange={e => {setTitleLength(parseInt(e.target.value.length, 10)); setTitle(e.target.value) }}></input>
      <p className='charCount'>{titleLength} / 60</p>

      <label htmlFor='pageDescription'>Page Description - maximum 160 characters</label>
      <p>A relevant description of the event with a call to action (register or watch). Supplement the content in the title and describe the benefit of the event agenda to a user.<br />
      This will appear underneath the page title in Google Search Results. Use similar keywords to the title.</p>
      <input name='pageDescription' onChange={e => {setDescriptionLength(parseInt(e.target.value.length, 10)); setDescription(e.target.value) }}></input>
      <p className='charCount'>{descriptionLength} / 160</p>
    </div>
  )
}

export default MetaForm;

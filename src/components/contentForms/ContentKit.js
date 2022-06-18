const ContentKit = ({ setName, setEmail }) => {
  return (
    <div className='content'>
      <h2>OncoConnect Content Kit - About Page</h2>
      <p className='intro'>Build your content here, and generate a word document to pass on to Takeda</p>
      <form>
        <label htmlFor='name'>Your name</label>
        <input type='text' name='name' onChange={e => setName(e.target.value)}></input>

        <label htmlFor='email'>Your email</label>
        <input type='text' name='email' onChange={e => setEmail(e.target.value)}></input>
      </form>
    </div>
  )
}

export default ContentKit;
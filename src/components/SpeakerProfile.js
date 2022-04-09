import Image from './common/Image';

const SpeakerProfile = ({ name, role }) => {
  return (
    <div className="section">
      <div className='content profile flex'>
        <Image width='300' height='300' />
        <div>
          <h2>Meet {name} your instructor</h2>
          <p><strong>{role} long list of qualifications</strong></p>
          <p>Short paragraph about the speaker, what they specialise in, and why they are qualified to host this event. A short professional biography or career history may be useful here, along with any significant achievements in their field. </p>
          <p>Some personal details such as hobbies or where they are from, so they also seem approachable.</p>
          <p>The speaker should be qualified and credible, but also human and approachable.</p>
        </div>
      </div>
    </div>
  )
}

export default SpeakerProfile;
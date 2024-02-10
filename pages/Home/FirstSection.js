import photo from './images/Photo.png'

const FirstSection = () => {
  return (
    <div className='first_section'>
      <div className="image">
      <img src={photo} className='photo' alt="main" />
      </div>
      <div className="secondText">
        <h2>Your small business growth advisors</h2>
        <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
        <div className="btns">
          <button style={{'backgroundColor':'black', 'font-weight':"bold",'color':'white'}}>Our Services</button>
          <button style={{'backgroundColor':' linear-gradient(0deg, #EBEBEB, #EBEBEB)','color':'0deg, #FFFFFF, #FFFFFF'}}>Book a Meeting</button>
       

        </div>
      </div>
    </div>
  )
}

export default FirstSection
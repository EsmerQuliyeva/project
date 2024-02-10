import photo from "./images/about.png"


const FirstSection = () => {
  return (
   <div className='first_section'>
    <div className="image">
    <img src={photo} className='photo' alt="about"/>
    </div>
    <div className="secondText_about">
      <h3>Creative Services For Boost Your Business Growth</h3>
      </div>
      </div>
  )
}



export default FirstSection
import photo from './images/Image.png'
import background from './images/Background.png'


const ThirdSection = () => {
  return (
    <div className="thirdSection_about">
        <div className="history">
                <p>Our History</p>
            </div>
            <h3>Better Website Means A User Experience</h3>
            <p className='text'>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused <br></br>on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
            <img src={photo} alt="group" className='group'/>
            <img src={background} alt="background" className='background'/>
    </div>
  )
}

export default ThirdSection
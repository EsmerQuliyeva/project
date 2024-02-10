import ceo from './images/ceo.png'
import manager from './images/manager.png'
import second from './images/ceo2.png'


const FourthSection = () => {
    return (
        <div className='fourthSection_about'>
            <div className="team">
                <p>Our team</p>
            </div>
            <div className="text_team">
                <h4>We champion the bold to achieve <br></br>the extraordinary</h4>
                <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team.</p>
            </div>
            <div className="authors">
                <div className="first">
                    <img src={ceo} alt="ceo" />
                    <p>Sarah Jasmine</p>
                    <span>Leverage agile frameworks to provide a robust<br></br> synopsis for high level overviews.</span>
                   
                </div>
                <div className="first">
                    <img src={manager} alt="manager" />
                    <p>John Carter</p>
                    <span>Leverage agile frameworks to provide a robust<br></br> synopsis for high level overviews.</span>
                </div>
                <div className="first">
                    <img src={second} alt="ceo2" />
                    <p>Daisy Stella</p>
                    <span>Leverage agile frameworks to provide a robust<br></br> synopsis for high level overviews.</span>
                </div>



            </div>
        </div>
    )
}

export default FourthSection
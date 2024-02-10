import image from './images/Image.png';
import market from './images/Market Place.png'
import icon from './images/Background Pattern.png'

const ThirdSection = () => {
    return (
        <div className="thirdSection">
            <div className='left_part'>
                <p className="about">About us</p>
                <h1  style={{marginBottom:'30px'}}>About our Consuting Agency Team</h1>
                <span>We create experiences and build products that make business grow</span>
                <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                <div className='price'>
                <div className='first_price'>
                    <h4>400+</h4>
                    <p>Business Sevices</p>
                </div>
                <div className='second_price'>
                    <h4>100+</h4>
                    <p>Happy Customer</p>
                </div>
            </div>
            </div>
            <div className='right_part'>
                <img src={image} alt="customer" className='customer'/>
                <img src={market} alt="market" className='market'/>
                <img src={icon} alt="icon" className='pattern'/>

            </div>
        
        </div>

    )
}

export default ThirdSection
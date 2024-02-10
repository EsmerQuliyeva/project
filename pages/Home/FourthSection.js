import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import user from './images/User.png'

const FourthSection = () => {
  return (
    <div className='feedback'>
        <div className='client_feedback'>
<span style={{textAlign:'center'}}>Client Feedback</span>
        </div>
        <p className='text'>“Lorem ipsum dolor sit amet,<br></br>consectetur<b style={{color:'#181818'}}> adipiscing elit, sed do <br></br>eiusmod </b>tempor incididunt ut labore et dolore”</p>
        <div className='customers'>
        <p style={{display:"flex", backgroundColor:"grey", gap:'20px', fontFamily:'Segoe UI', margin:'20px'}}><FaArrowLeft style={{backgroundColor:'black', color:'white', borderRadius:'30px', width:'25px',margin:'auto'}}/>Prev</p><img src={user} alt="user"/><p style={{display:"flex", backgroundColor:"grey", gap:'20px', fontFamily:'Segoe UI', margin:'20px'}}>Next<FaArrowRight style={{backgroundColor:'black', color:'white', borderRadius:'30px', width:'25px', margin:'auto'}}/></p>
        </div>
    </div>
  )
}

export default FourthSection


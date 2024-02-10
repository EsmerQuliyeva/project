const FifthSection = () => {
    return (
        <div className="fifth" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'40px', marginTop:"50px"}}>
            <div className='fifth-left'>
                <div className='premier'>
                    <h5>Contact us. It is easy</h5>
                    <p>Leverage agile frameworks to provide a robust<br></br> synopsis for high level overviews. Iterative approaches to <br></br> corporate strategy foster collaborative.</p>
                </div>
                <div className='deuxieme'>
                    <span>Call today</span>
                    <p>+1 800 100 900</p>
                </div>
                <div className='troiseme'>
                    <span>Monday to Friday</span>
                    <p>9AM-5PM</p>
                </div>
                <div className='quatrieme'>
                    <span>USA office</span>
                    <p>195 Devonshire St Boston, MA 02110</p>
                </div>


            </div>
            <div className='fifth-right'>
             <label>Full Name</label><br></br>
             <input type="text" placeholder='John David'/><br></br><br></br>
             <label>Email</label><br></br>
             <input type="email" placeholder='consult@mail.com'/><br></br><br></br>
             <label>Phone</label><br></br>
             <input type="number" placeholder='+008 654 231'/><br></br><br></br>
             <label>Company(Optional)</label><br></br>
             <input type="text" placeholder='yourcompany.com'/><br></br><br></br>
             <label>Message</label><br></br><br></br>
             <textarea placeholder="Briefly tell us about your project and your current goals. How can we help you?"></textarea>



            </div>

        </div>
    )
}

export default FifthSection
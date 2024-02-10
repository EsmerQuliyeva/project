import picture from "./images/photo.png"
const SecondSection = () => {
    return (
        <div>
            <div className="service">
                <p>Our Service</p>
            </div>
            <div className="secondPart" >
                <div className="firstPart_about">
                    <h3>Turn Your Ideas Into Reality</h3><br></br>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br></br>Override the digital divide with additional from DevOps.</p>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</p>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</p>
                </div>
                <div className='secondPart'>
                    <img src={picture} className="picture_about" alt="about" />
                </div>
            </div>
<div className="thirdPart_about">
<div className="number_about">
    <p>1128+</p>
    <span>Successfull work</span>
</div>
<div className="number_about">
    <p>908+</p>
    <span>Team member</span>
</div>
<div className="number_about">
    <p>258+</p>
    <span>Happy Customers</span>
</div>
<div className="number_about">
    <p>564+</p>
    <span>Creative Idea</span>
</div>

</div>
        </div>
    )
}
export default SecondSection
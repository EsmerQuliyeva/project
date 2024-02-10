import picture from './images/service.png'
import pattern from './images/Pattern.png'
import green from './images/green.png'
const ThirdSection = () => {
  return (
    <div>
<div className='third_section_service'>
<div className='first_part'>
<img src={picture} alt="services" className='main'/>
<img src={pattern} alt="pattern" className='pattern'/>
<img src={green} alt ="background" className='background_green'/>


</div>
<div className='second_part'>
<h2>Our Consuting Service Development</h2>
<div className='part'>
<span className='span'>Banking and Finance</span>
<p>Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
</div>
<div className='part'>
    <span  className='span'>Logistic and Transportation</span>
    <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.</p>
</div>
<div className='part'>
<span  className='span'>Trading</span>
<p>Uniquely matrix economically sound value through cooperative technology parallel task fully researched data and enterprise.</p>
</div>
</div>
</div>
    </div>
  )
}

export default ThirdSection
import React from 'react'
import Image1 from '../assets/images/How/cards.svg'
import Image2 from '../assets/images/How/iphone-transfer.svg'
import Image3 from '../assets/images/How/transfer.svg'
import Image4 from '../assets/images/How/budget.svg'
import Image5 from '../assets/images/How/iphone-cards.svg'
import Image6 from '../assets/images/How/transfer-desktop.svg'

const How = () => {
  return (
    <section className="how-it-works">
    <div className="container">
        <h2>How Does It Work?</h2>
        <div className="how-grid">
        <div className="image-wrapper">
            <img id="img-1" src={Image1}/>
            <img id="img-2" src={Image2}/>
            <img id="img-3" src={Image3}/>
            <img id="img-4" src={Image4}/>
            <img id="img-5" src={Image5}/>
            <img id="img-6" src={Image6}/>
        </div>
        <div className="h3-variants">
        <h3 id="mobile">Transfers to people from<br /> your contact list</h3>
        <h3 id="tablet">Step 3. Transfers to people from your<br /> contact list</h3>
        <h3 id="desktop">Latest transaction history</h3>
    </div>
        <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        <p id="p2">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique<br/> quisque hac in consectetur condimentum. </p>
    </div>
    </div>


</section>
  )
}

export default How
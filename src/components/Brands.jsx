import React from 'react'
import Brand1 from '../assets/images/Brands/brand-1.svg'
import Brand2 from '../assets/images/Brands/brand-2.svg'
import Brand3 from '../assets/images/Brands/brand-3.svg'
import Brand4 from '../assets/images/Brands/brand-4.svg'
import Brand5 from '../assets/images/Brands/brand-5.svg'
import Brand6 from '../assets/images/Brands/brand-6.svg'

const Brands = () => {
  return (
    <section id="brands">
            <div className="container">
                <div className="brand-box">
                    <img src={Brand1} alt="brand 1"/>
                </div>
                <div className="brand-box">
                    <img src={Brand2} alt="brand 2"/>
                </div>
                <div className="brand-box">
                    <img src={Brand3} alt="brand 3"/>
                </div>
                <div className="brand-box">
                    <img src={Brand4} alt="brand 4"/>
                </div>
                <div id="brand-5" className="brand-box">
                    <img src={Brand5} alt="brand 5"/>
                </div>
                <div id="brand-6" className="brand-box">
                    <img src={Brand6} alt="brand 6"/>
                </div>
                

            </div>
        </section>
  )
}

export default Brands
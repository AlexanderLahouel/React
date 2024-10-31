import React from 'react'
import Phone from '../assets/images/Features/iphone-features.svg'
import Item1 from '../assets/images/Features/credit-card.svg'
import Item2 from '../assets/images/Features/shield.svg'
import Item3 from '../assets/images/Features/bars.svg'
import Item4 from '../assets/images/Features/communication.svg'
import Item5 from '../assets/images/Features/wallet.svg'
import Item6 from '../assets/images/Features/happy.svg'

const Features = () => {
  return (
    <section className="app-features">

            <div className="image-container">
                <img src={Phone} alt="Iphone"/>
            </div>
           
            <div className="container">
                <h2 id="headline">App Features</h2>
                <p id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

                <div className="features-grid">

                    <div className="feature-item">
                    <div className="icon"><img src={Item1} alt="credit card"/></div>
                    <div className="text">             
                    <h3>Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="icon"><img src={Item2} alt="data security shield"/></div>
                    <div className="text">  
                    <h3>Data Security</h3>
                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="icon"><img src={Item3} alt="Cost Statistics"/></div>
                    <div className="text">  
                    <h3>Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="icon"><img src={Item4} alt="Support 24/7"/></div>
                    <div className="text">  
                    <h3>Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="icon"><img src={Item5}alt="Regular Cashback"/></div>
                    <div className="text">  
                    <h3>Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="icon"><img src={Item6} alt="Top Standards"/></div>
                    <div className="text">
                    <h3>Top Standards</h3>
                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}

export default Features
import React from 'react'
import Check from '../assets/images/Transfer/checkcircle.svg'
import Send from '../assets/images/Transfer/send-money.svg'
import Contacts from '../assets/images/Transfer/contacts.svg'
import Sidearrow from '../assets/images/Transfer/sidearrow.svg'
import Wallet from '../assets/images/Transfer/wallet.svg'
import Card from '../assets/images/Transfer/credit-card.svg'



const Transfer = () => {
  return (
    <section className="transfer-money">
    <div className="container">
        <div className="transfer-grid">
            <div className="transfer-item">
                <h2>Make your money <br/>transfer simple and clear</h2>
                <ul>
                    <li><img src={Check} alt ="Check"/>Banking transactions are free for you</li>
                    <li><img src={Check} alt ="Check"/>No monthly cash commission</li>
                    <li><img src={Check} alt ="Check"/>Manage payments and transactions online</li>
                </ul>
                <a id="learn-more" href="#" className="btn-primary">Learn more<img id="sidearrow" src ={Sidearrow} alt="sidearrow"/></a>
            
            </div>
            <div className="transfer-item">
                <img id="send" src={Send} alt="send money to"/>
            </div>
            <div className="transfer-item">
                <img id="contacts" src={Contacts} alt="contacts-list"/>
            </div>
            <div className="transfer-item">
                <h2 id="Receive">Receive payment from<br/> international bank details</h2>
                <div className="grid-icons">
                    <div className="icons">
                        <img src={Card} alt="Credit-card icon"/>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div className="icons">
                        <img src={Wallet} alt="Wallet icon"/>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>
                <a id="learn-more2" href="#" className="btn-primary">Learn more<img id="sidearrow" src ={Sidearrow} alt="sidearrow"/></a>
            </div>
        </div>
    </div>

</section>
  )
}

export default Transfer
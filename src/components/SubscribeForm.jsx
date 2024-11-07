import React, {useState} from 'react'
import axios from 'axios'

const SubscribeForm = () => {
 const [email, setEmail] = useState ("");
 const [message, setMessage] = useState ("");
 const [isError, setIsError] = useState(false);
 const [submitted, setSubmitted] =useState(false);


const handleSubmit = async (e) => {
    e.preventDefault();


try {
    const response = await axios.post ("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
        email: email,
      });

      if (response.status === 200) {
        setEmail("");
        setSubmitted(true)
        setIsError(false);
      }
    } catch (error) {
        setMessage("Subscription failed. Please try entering a valid email.");
        setIsError(true);
        console.error("Error:", error);
      }
};

if(submitted) {
    return (
          <h2 className="submit-message">Thank you for subscribing!</h2>

    )
}

return (
    <div className="subscribe-form">
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Your email"
          className="form-input email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
      {message && (
  <p className={`subscribe-message ${isError ? 'error' : 'success'}`}>
    {message}
  </p>
)}
    
    </div>
  );
};





export default SubscribeForm
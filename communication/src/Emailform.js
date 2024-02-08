import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
   const serviceId ='service_dhxv6vb'
   const templateID ='template_xgy4jrg';
   const publicKey ='zMoLmIWB__ysOC9JU';

   //create a new object that conatins dynamic template parms
   const templateParams ={
    from_name: name,
    from_email: email,
    to_name: name,
    message: message,
   };

//send the email usning emails
emailjs.send(serviceId,templateID,templateParams,publicKey)
.then((response)=>{
    console.log('Email send sucessfully',response)
    setName('');
    setEmail('');
    setMessage('');
})
.catch((error)=>{
    console.error('Error sending email',error);
});
    }

    return (
        <form onSubmit={handleSubmit} className="emailform">
            <input 
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send Email</button>
        </form>
    );
}

export default Email;

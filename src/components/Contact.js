import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://your-api-endpoint.com/contact', {
            name,
            email,
            message
        })
        .then(response => {
            console.log('Form submitted successfully', response.data);
            setSubmitted(true);
        })
        .catch(error => {
            console.error('Error submitting form', error);
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            {submitted ? (
                <p>Thank you for your message! We will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Message:
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default Contact;

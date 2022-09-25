import React from 'react';
import ContactTitle from '../components/ContactTitle';
import { useState } from 'react';


export default function ContactPage() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('Send');

    const handleSubmit = event => {
        event.preventDefault();

        console.log('form submitted ✅');
        setName('');
        setMail('');
        setMessage('Your message has been sent')
    };

    return (
        <div className="contact-section">
            <ContactTitle></ContactTitle>
            <div class="contact-form">
                <form id="contact-form" method="POST" action="contact-form-handle.php" onSubmit={handleSubmit}>
                    <input name="name" type="text" className="form-control" placeholder="Your name / company" value={name} onChange={event => setName(event.target.value)} required></input>
                    <input name="email" type="email" className="form-control" placeholder="Your e-mail" value={mail} onChange={event => setMail(event.target.value)} required></input>
                    <textarea name="message" className="form-control" rows="5" placeholder="Wanna add a comment?"></textarea>
                    <input type="submit" name="submit" className="form-control submit" value={message} onChange={event => setMessage(event.target.value)}></input>
                </form>
            </div>
        </div>
    )
};
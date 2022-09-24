import React from 'react'
import ContactTitle from '../components/ContactTitle'

export default function ContactPage() {
    return (
        <div  className="contact-section">
            <ContactTitle></ContactTitle>
            <div class="contact-form">
                <form id="contact-form" method="POST" action="contact-form-handle.php">
                    <input name="name" type="text" className="form-control" placeholder="Your name / company" required>
                    </input>
                    <input name="email" type="email" className="form-control" placeholder="Your e-mail" required>
                    </input>
                    <textarea name="message" className="form-control" rows="5" placeholder="Wanna add a comment?"></textarea>
                    <input type="submit" name="submit" className="form-control submit" value="Send"></input>
                </form>
            </div>

        </div>
      )
}
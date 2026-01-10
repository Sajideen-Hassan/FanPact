import React from 'react';
import './InfoPage.css';

const ContactPage = () => {
    return (
        <div className="info-page">
            <div className="info-container">
                <h1>Contact Us</h1>
                <p>Have questions or need support? We're here to help!</p>

                <div className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" placeholder="How can we help?" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button className="submit-btn">Send Message</button>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <p><strong>Email Us:</strong> team@fanpact.com</p>
                    <p><strong>Affiliate Inquiries:</strong> affiliates@fanpact.net</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

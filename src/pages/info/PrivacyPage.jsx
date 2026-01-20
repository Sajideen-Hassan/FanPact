import React from 'react';
import './InfoPage.css';

const PrivacyPage = () => {
    return (
        <div className="info-page">
            <div className="info-container">
                <h1>Privacy Policy</h1>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>
                    At ESHOP, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include:
                </p>
                <ul>
                    <li>Personal Identifiers: Name, email address, phone number, and shipping address.</li>
                    <li>Payment Information: Credit card details and billing address (processed securely via our payment partners).</li>
                    <li>Transaction Data: Details about products you have purchased and your interactions with our site.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                    <li>To process and fulfill your orders.</li>
                    <li>To communicate with you about your account or transactions.</li>
                    <li>To improve our website, products, and services.</li>
                    <li>To send you promotional communications (at your request).</li>
                    <li>To detect and prevent fraudulent activity.</li>
                </ul>

                <h2>3. Data Security</h2>
                <p>
                    We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2>4. Third-Party Services</h2>
                <p>
                    We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or perform service-related services (e.g., payment processing, shipping). These third parties have access to your personal information only to perform these tasks on our behalf.
                </p>

                <h2>5. Your Rights</h2>
                <p>
                    Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@eshop.com" style={{ color: '#ff4c29' }}>privacy@eshop.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPage;

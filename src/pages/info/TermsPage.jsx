import React from 'react';
import './InfoPage.css';

const TermsPage = () => {
    return (
        <div className="info-page">
            <div className="info-container">
                <h1>Terms of Service</h1>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>
                    Welcome to ESHOP. These Terms of Service govern your use of our website and services. By accessing or using ESHOP, you agree to be bound by these terms.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By creating an account or making a purchase on ESHOP, you represent that you are at least 18 years old and have the legal capacity to enter into this agreement.
                </p>

                <h2>2. User Conduct</h2>
                <p>
                    You agree not to use our site for any unlawful purpose or in any way that could damage, disable, or impair the site. You are responsible for maintaining the confidentiality of your account credentials.
                </p>

                <h2>3. Intellectual Property</h2>
                <p>
                    All content on this site, including text, graphics, logos, and images, is the property of ESHOP or its content suppliers and is protected by intellectual property laws.
                </p>

                <h2>4. Limitation of Liability</h2>
                <p>
                    ESHOP shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                </p>

                <h2>5. Governing Law</h2>
                <p>
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ESHOP operates, without regard to its conflict of law provisions.
                </p>

                <h2>6. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new terms on this page.
                </p>

                <h2>7. Contact Information</h2>
                <p>
                    Questions about the Terms of Service should be sent to us at <a href="mailto:support@eshop.com" style={{ color: '#ff4c29' }}>support@eshop.com</a>.
                </p>
            </div>
        </div>
    );
};

export default TermsPage;

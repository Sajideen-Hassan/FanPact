import React from 'react';
import './InfoPage.css';

const CookiePolicyPage = () => {
    return (
        <div className="info-page">
            <div className="info-container">
                <h1>Cookie Policy</h1>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>
                    This Cookie Policy explains how ESHOP uses cookies and similar technologies to recognize you when you visit our website.
                </p>

                <h2>What are cookies?</h2>
                <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information.
                </p>

                <h2>Why do we use cookies?</h2>
                <p>We use first-party and third-party cookies for several reasons:</p>
                <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                    <li><strong>Performance and Analytics:</strong> To understand how visitors interact with our site.</li>
                    <li><strong>Functionality Cookies:</strong> To remember your preferences and settings.</li>
                    <li><strong>Targeting Cookies:</strong> To deliver relevant advertisements to you.</li>
                </ul>

                <h2>How can I control cookies?</h2>
                <p>
                    You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality may be restricted.
                </p>

                <h2>Changes to this Policy</h2>
                <p>
                    We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
                </p>

                <h2>More Information</h2>
                <p>
                    For any queries in relation to our policy on cookies and your choices, please contact us at <a href="mailto:support@eshop.com" style={{ color: '#ff4c29' }}>support@eshop.com</a>.
                </p>
            </div>
        </div>
    );
};

export default CookiePolicyPage;

import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString();
    const storeName = 'Varahi Enterprise';
    const email = 'dijdjid@gmail.com';

    return (
        <div className="terms-container">
            <div className="terms-header">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: {currentDate}</p>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <p>At {storeName}, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights.</p>
                </section>

                <section className="terms-section">
                    <h2>1. Information We Collect</h2>
                    <p>We may collect the following information when you use our website:</p>
                    <p><strong>Personal Information:</strong> name, email, phone number, billing/shipping address</p>
                    <p><strong>Payment Information:</strong> processed securely through third-party payment gateways</p>
                    <p><strong>Account Information:</strong> login details, order history</p>
                    <p><strong>Usage Data:</strong> IP address, browser type, device information</p>
                    <p><strong>Cookies:</strong> to enhance user experience and track website performance</p>
                </section>

                <section className="terms-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>Your data may be used to:</p>
                    <ul>
                        <li>Process and fulfill orders</li>
                        <li>Improve customer service</li>
                        <li>Send order updates, marketing emails, or promotions</li>
                        <li>Prevent fraud and secure transactions</li>
                        <li>Enhance website performance and user experience</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>3. Sharing Your Information</h2>
                    <p>We may share your information with:</p>
                    <ul>
                        <li>Payment processors (e.g., RazorPay, Stripe, PayPal)</li>
                        <li>Shipping and delivery partners</li>
                        <li>Technical service providers</li>
                        <li>Legal authorities (if required)</li>
                    </ul>
                    <p>We do not sell your personal data.</p>
                </section>

                <section className="terms-section">
                    <h2>4. Cookies</h2>
                    <p>We use cookies to:</p>
                    <ul>
                        <li>Save your preferences</li>
                        <li>Analyze website traffic</li>
                        <li>Improve site performance</li>
                    </ul>
                    <p>You may disable cookies in your browser settings, but some features may not work properly.</p>
                </section>

                <section className="terms-section">
                    <h2>5. Data Security</h2>
                    <p>We use secure hosting, encryption, and industry-standard safeguards to protect your data, but no method is 100% secure.</p>
                </section>

                <section className="terms-section">
                    <h2>6. Your Rights</h2>
                    <p>You may request to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Update or correct your information</li>
                        <li>Delete your account</li>
                        <li>Opt-out of marketing emails</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>7. Third-Party Links</h2>
                    <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
                </section>

                <section className="terms-section">
                    <h2>8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy anytime. Changes will be posted here.</p>
                </section>

                <section className="terms-section">
                    <h2>9. Contact Us</h2>
                    <p>For privacy concerns or questions:</p>
                    <p>Email: {email}</p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;

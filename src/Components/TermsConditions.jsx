import React from 'react';
import './TermsConditions.css';

function TermsConditions() {
    const currentDate = new Date().toLocaleDateString();
    const storeName = 'Varahi Enterprise';
    const domain = 'varahi.com';
    const currency = '₹';

    return (
        <div className="terms-container">
            <div className="terms-header">
                <h1>Terms & Conditions</h1>
                <p className="last-updated">Last updated: {currentDate}</p>
            </div>

            <div className="terms-content">
                <section className="terms-section">
                    <h2>1. Introduction</h2>
                    <p>Welcome to {storeName}. These Terms & Conditions ("Terms") govern your use of our website located at {domain} and our services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.</p>
                </section>

                <section className="terms-section">
                    <h2>2. Use of Our Website</h2>
                    <p>You must be at least 18 years old to use our website. You agree to use our website only for lawful purposes and in accordance with these Terms. You are prohibited from using our website in any way that could damage, disable, overburden, or impair our servers or networks.</p>
                </section>

                <section className="terms-section">
                    <h2>3. Products and Services</h2>
                    <p>All products and services are subject to availability. We reserve the right to discontinue any product or service at any time. Prices are subject to change without notice. We strive to provide accurate product descriptions, but we do not warrant that product descriptions or other content on our website are accurate, complete, reliable, current, or error-free.</p>
                </section>

                <section className="terms-section">
                    <h2>4. Orders and Payment</h2>
                    <p>When you place an order, you agree to provide current, complete, and accurate purchase and account information. All payments must be made in {currency}. We accept various payment methods including credit cards, debit cards, and online payment gateways. Payment is due at the time of order placement.</p>
                </section>

                <section className="terms-section">
                    <h2>5. Shipping and Delivery</h2>
                    <p>We will make reasonable efforts to deliver products within the estimated timeframe. However, delivery dates are estimates only and we are not liable for delays. Risk of loss passes to the buyer upon delivery to the carrier.</p>
                </section>

                <section className="terms-section">
                    <h2>6. Returns and Refunds</h2>
                    <p>Items may be returned within 30 days of purchase for a full refund, provided they are in original condition. Refunds will be processed within 5-7 business days after receipt of the returned item. Shipping costs for returns are the responsibility of the customer unless the return is due to our error.</p>
                </section>

                <section className="terms-section">
                    <h2>7. Intellectual Property</h2>
                    <p>All content on our website, including text, graphics, logos, and images, is the property of {storeName} or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
                </section>

                <section className="terms-section">
                    <h2>8. Privacy</h2>
                    <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our website, to understand our practices.</p>
                </section>

                <section className="terms-section">
                    <h2>9. Limitation of Liability</h2>
                    <p>{storeName} shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products. Our total liability shall not exceed the amount paid by you for the product or service in question.</p>
                </section>

                <section className="terms-section">
                    <h2>10. Governing Law</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
                </section>

                <section className="terms-section">
                    <h2>11. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website after changes are posted constitutes your acceptance of the new Terms.</p>
                </section>

                <section className="terms-section">
                    <h2>12. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at support@{domain}.</p>
                </section>
            </div>
        </div>
    );
}

export default TermsConditions;

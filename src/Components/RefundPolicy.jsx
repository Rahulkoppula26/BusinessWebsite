import React from 'react';
import './RefundPolicy.css';

function RefundPolicy() {
    const currentDate = new Date().toLocaleDateString();
    const email = 'dijdjid@gmail.com';

    return (
        <div className="refund-container">
            <div className="refund-header">
                <h1>Return & Refund Policy</h1>
                <p className="last-updated">Last Updated: {currentDate}</p>
            </div>

            <div className="refund-content">
                <p>We want you to love your purchase. If you’re not satisfied, please review our Return & Refund Policy below.</p>

                <section className="refund-section">
                    <h2>1. Eligibility for Returns</h2>
                    <p>Items may be returned if:</p>
                    <ul>
                        <li>Returned within 30 days of delivery</li>
                        <li>Unused, unworn, and unwashed</li>
                        <li>In original packaging with tags attached</li>
                    </ul>
                    <p>Non-returnable items:</p>
                    <ul>
                        <li>Innerwear, lingerie, socks</li>
                        <li>Accessories</li>
                        <li>Clearance/sale items</li>
                        <li>Customized or personalized items</li>
                    </ul>
                </section>

                <section className="refund-section">
                    <h2>2. Return Process</h2>
                    <ul>
                        <li>Contact us at {email} with your order number.</li>
                        <li>Wait for return approval and instructions.</li>
                        <li>Ship the product back to our return address.</li>
                    </ul>
                    <p>Return shipping cost:</p>
                    <ul>
                        <li>Paid by customer, unless item was damaged or incorrect.</li>
                    </ul>
                </section>

                <section className="refund-section">
                    <h2>3. Refunds</h2>
                    <p>Refunds are:</p>
                    <ul>
                        <li>Initiated after product inspection</li>
                        <li>Returned to original payment method</li>
                        <li>Processed within 5-7 business days</li>
                    </ul>
                    <p>We may reject a refund if the item:</p>
                    <ul>
                        <li>Shows signs of wear</li>
                        <li>Has missing tags</li>
                        <li>Is returned after the allowed period</li>
                    </ul>
                </section>

                <section className="refund-section">
                    <h2>4. Exchanges</h2>
                    <p>Exchanges are available for:</p>
                    <ul>
                        <li>Size issues</li>
                        <li>Defective items</li>
                        <li>Wrong products received</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default RefundPolicy;

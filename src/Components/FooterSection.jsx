import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './FooterSection.css';
function FooterSection() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Logo/Brand Name and Description */}
                <div className="footer-enterprise" >
                    <h2>Varahi Enterprise</h2>
                    <p>Varahi Enterprise is committed to providing the best products at unbeatable prices. Our mission is to enhance your shopping experience with quality and reliability.</p>
                </div>

                {/* Navigation Links */}
            <div className="footer-container">
                <div className="quick-links " >
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
                        <li><a href="#Products" className="hover:text-gray-300 transition-colors">Products/Services</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div className="legal-links" >
                    <h2 className="text-lg font-semibold mb-4">Legal</h2>
                    <ul className="space-y-2">
                        <li><Link to="/terms-conditions" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/refund-policy" className="hover:text-gray-300 transition-colors">Refund Policy</Link></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Contact Information and Social Media */}
                <div className="contact-info" >
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="text-sm mb-2">Email: dijdjid@gmail.com</p>
                    <p className="text-sm mb-2">Phone: +123 456 7890</p>
                    <p className="text-sm mb-4">Address: 123 Market St, City, Country</p>
                    <div className="icons flex space-x-4">
                        <a href="#" className=" hover:text-gray-300 transition-colors" aria-label="WhatsApp">
                            <FontAwesomeIcon className='whatsapp' icon={faWhatsapp} size="lg" />
                        </a> 
                        <a href="#" className=" hover:text-gray-300 transition-colors" aria-label="Facebook">
                            <FontAwesomeIcon className='facebook' icon={faFacebook} size="lg" />
                        </a>
                        <a href="#" className="instagram hover:text-gray-300 transition-colors" aria-label="Instagram">
                            <FontAwesomeIcon className='instagram' icon={faInstagram} size="lg" />
                        </a>
                        <a href="#" className="gmail hover:text-gray-300 transition-colors" aria-label="Gmail">
                            <FontAwesomeIcon className='gmail' icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                </div>
               </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="container mx-auto px-4 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <input
                        type="email"
                        placeholder="Subscribe to our newsletter"
                        className="px-4 py-2 rounded-l-md text-black w-full md:w-auto md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-md md:rounded-l-none transition-colors mt-2 md:mt-0">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="bg-gray-900 text-center py-4 mt-8">
                &copy; {new Date().getFullYear()} Varahi Enterprise. All rights reserved.
            </div>
        </footer>
    );
}

export default FooterSection;


import '../../assets/css/Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section v3event">
                <h3>V3Event</h3>
                <p className='para'>V3 Events and Entertainments Pvt Ltd is passionate about crafting charmingly timeless and elegant luxurious weddings and events at stunning venues throughout the world. As the leading wedding designers and event organisers in Delhi and Gurgaon, we are renowned to create authentic experiences worth cherishing for a lifetime.</p>
            </div>
            <div className="footer-section link-contactus">
                <h3>Link</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-section location">
                <h3>Location</h3>
                <p>DLF PHASE - 2 L-25/9</p>
                <p>Near by Privat Hospital Gurugram, </p>
                <p>Haryana 122002</p>
            </div>
            <div className="footer-section contactus">
                <h3>Contact Us</h3>
                <p>Email: example@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
        </footer>
    );
}

export default Footer;

import "../contact.css"
import emailIcon from "../assets/email.svg"
import addressIcon from "../assets/address.svg"
import phoneIcon from "../assets/phone.svg"

export default function Contact() {
    return (
        <div id="contact">
            <div className="embed-map-responsive">
                <div className="embed-map-container">
                    <iframe
                    className="embed-map-frame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5472353968053!2d67.06937599999999!3d24.879308800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60de397099%3A0x2ec33f5094b30dc8!2sCrownbridge%20-%20London%20International%20College!5e0!3m2!1sen!2s!4v1759403594022!5m2!1sen!2s"
                    width="600"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>                    
                </div>
            </div>

            <div className="findus">
                <h3>Find Us</h3>
                <div className="findCards">
                    <div className="address findCard">
                        <img src={addressIcon} alt="Address Icon" />
                        <h4>Address</h4>
                        <p> <strong>UK Office</strong> <br /> 7 Tully Drive, Paddock Wood, TN12 6FP, UK</p>
                        <p> <strong>Pakistan Office</strong> <br /> BMCHS Plot # 371, towards Naheed Super Market, Karachi, Pakistan</p>
                    </div>
                    <div className="phone findCard">
                        <img src={phoneIcon} alt="Phone Icon" />
                        <h4>Phone</h4>
                        <p>+44-77-43480529</p>
                        <p>+92-300-2286601</p>
                    </div>
                    <div className="email findCard">
                        <img src={emailIcon} alt="Email Icon" />
                        <h4>Email</h4>
                        <p>info.crownbridge@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
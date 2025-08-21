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
                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Hexis%20College&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                        allowFullScreen
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
                        <p>7 Tully Drive, Paddock Wood, TN12 6FP, UK</p>
                        <p>Hexis College, BMCHS Plot # 371, towards Naheed Super Market, Karachi, Pakistan</p>
                    </div>
                    <div className="phone findCard">
                        <img src={phoneIcon} alt="Phone Icon" />
                        <h4>Phone</h4>
                        <p>+44-77-1548052</p>
                        <p>+92-336-6643947</p>
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
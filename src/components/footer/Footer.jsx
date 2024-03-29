import React from 'react';
import mail from "../../images/icon-envelope.png";

function Footer() {
  return (
    <footer className="site-footer">
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <div className="subscribe-form" style={{ background: "linear-gradient(to right, #15281C, #256A5C)" }}>
                <form action="!#">
                    <label for="email">
                        <span style={{ fontSize: "15px" }}>Get notifications of our latest posts sent straight to your inbox</span>
                    </label>
                    <div className="control">
                        <input id="email" type="text" placeholder="Enter your email to subscribe..." disabled />
                        <button type="submit"><img src={mail} alt="mail" /></button>
                    </div>
                </form>
            </div>
            <div className="social-links">
                <a href="!#"><i className="fa fa-instagram"></i></a>
                <a href="!#"><i className="fa fa-twitter"></i></a>
                <a href="!#"><i className="fa fa-google-plus"></i></a>
                <a href="!#"><i className="fa fa-linkedin"></i></a>
                <a href="!#"><i className="fa fa-phone"></i></a>
            </div>
            <div className="copy">
                <p>Copyright 2023 Tech Law Space. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
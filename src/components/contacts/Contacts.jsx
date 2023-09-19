import React, {useRef} from "react";
import './contacts.css';
import {MdOutlineEmail} from 'react-icons/md';
import emailjs from 'emailjs-com';
const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pzg5yz4', 'template_iqtrvmd', form.current, '0Uy0vhWj1uS_mQkDB')
    e.target.reset();
  };


    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>jhairagiltrabajo@gmail.com</h5>
                        <a href="mailto:jhairagiltrabajo@gmail.com" target="_blank">Send a message</a>
                    </article>
                </div>
                {/**End of contact option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export {Contacts}
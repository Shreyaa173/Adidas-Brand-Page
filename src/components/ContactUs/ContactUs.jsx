import React from "react";
import styles from "./ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeCircleCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'

const ContactUs = () => {
    const[name,setName] = useState("Adidas");
    const[email,setEmail] = useState("supoort@adidas.com");
    const[phone,setPhone] = useState("+12 1-800-ADIDAS (234-327)");
    const[text,setText] = useState("Welcome");

    const onSubmit = (event) => {
        event.preventDefault();
        const updatedName = event.target[0].value;
        const updatedEmail = event.target[1].value;
        const updatedPhone = event.target[2].value;
        const updatedText = event.target[3].value;

        setName(updatedName);
        setEmail(updatedEmail);
        setPhone(updatedPhone);
        setText(updatedText);

        // Log the updated values directly from the form submission
        console.log({
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
        text: updatedText,
        });
    }

    return (
        <>
        <div className={styles.contact}>
            <div className={styles.details}>
                <h1 className={styles.heading}>Contact Us</h1>
            <p className={styles.text}>
                We’re here to help! At Adidas, we strive to ensure your experience
                is seamless. Whether you have questions about our products, need
                assistance with your order, or just want to share feedback, we’d
                love to hear from you.
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} className={styles.icons} /> +12
                1-800-ADIDAS (234-327)
            </p>
            <p>
                <FontAwesomeIcon
                icon={faEnvelopeCircleCheck}
                className={styles.icons}
                />{" "}
                support@adidas.com
            </p>
            <p>
                <FontAwesomeIcon icon={faClock} className={styles.icons} /> Monday
                to Friday, 9:00 AM – 6:00 PM (EST)
            </p>
            </div>
            <form onSubmit={onSubmit}>
            <div className={styles.form}>
            <div className={styles.formElement}>
                <label htmlFor="name">Name</label>
            <input
                type="text" name="name"
                className={styles.input}
                />
            </div>
            <div className={styles.phone}>
            <div className={styles.formElement}>
                <label htmlFor="email">Email</label>
            <input
                type="text" name="email"
                className={styles.input}
                />
            </div>
            <div className={styles.formElement}>
                <label htmlFor="phone">Phone Number</label>
            <input
                type="text" name="phone"
                className={styles.input}
                />
            </div>
            </div>
            <br />
            <div className={styles.formText}>
                <label htmlFor="message">Message</label>
            <input
                type="text" name="message"
                className={styles.textarea}
                />
            </div>
            <div className= {styles.button}>
                <button>Submit</button>
            </div>
            </div>
            </form>
        </div>
        </>
        );
    };

export default ContactUs;

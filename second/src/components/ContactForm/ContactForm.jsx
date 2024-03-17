import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdDisplaySettings, MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {
  const onViaCallSubmit=()=>{
    console.log("HEllo")
  }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
          onClick={onViaCallSubmit}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA Call" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
        isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />

          <form>
            <div className={styles.form_control}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"></input>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"></input>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text:</label>
                <textarea name="text" rows="8"/>
            </div>
            <div style={{
              display:"flex",
              justifyContent:"end",
            }}>
            <Button
            isOutline={false}
            text="Submit Button"
          />
            </div>
          </form>
      </div>
      <div className={styles.contact_image}>
        <img src="\images\Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import styles from "../styles/contact.module.css";

import { useRouter } from "next/router";
export default function Contact() {
  const navigateTo = useRouter();

  const [state, handleSubmit] = useForm("xqkjkvkj");

  useEffect(() => {
    if (state.succeeded) {
      navigateTo.push("/Thankyou");
    }
  }, [state.succeeded, navigateTo]);

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.contactCopy}>
        <p className={styles.eyebrow}>The next good thing starts here</p>
        <h2 className={styles.heading}>Have a good one in mind?</h2>
        <p className={styles.description}>
          Have a project, a question, or just want to say hello? I&apos;d love to hear from you.
        </p>
        <div className={styles.icons}>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-link"
            href="mailto: ibimina.c.hart@gmail.com">


            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/ibimina-hart"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ibimina"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ibiminaaH"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaTwitter />
          </a>
        </div>

      </div>
      <form method="POST" onSubmit={handleSubmit} className={styles.form}>

        <input type="text" name="name" id="name" placeholder="Name" aria-label="Name" />
        <input type="text" name="subject" id="subject" placeholder="Subject" aria-label="Subject" />
        <input type="email" name="email" id="email" placeholder="Email address" aria-label="Email address" />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Your message"
          aria-label="Your message"
          className={styles.message}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="submit"
          disabled={state.submitting}
          value={state.submitting ? "SENDING..." : "SEND MESSAGE"}
          className={styles.submit}
        />
      </form>
    </section>
  );
}

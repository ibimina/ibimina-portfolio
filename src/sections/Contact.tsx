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
      <div className="contact-link">
        <div>
          <h2 className="uppercase abt">Contact</h2>
          <p>
            Do you have any questions about me or my projects? I'm available to
            grab a coffee and chat! And if you just want a quick chat, then you can find me
            on social media or simply can send me a message right here. Thanks for
            stopping by!
          </p>
        </div>
        <div className={styles.icons}>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-link"
            href="mailto: ibimina.c.hart@gmail.com">


            <FaEnvelope />
          </a>
          <a
            href="https://linked/in/ibimina-hart"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github/ibimina"
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

        <input type="text" name="name" id="name" placeholder="name" />
        <input type="text" name="subject" id="subject" placeholder="subject" />
        <input type="email" name="email" id="email" placeholder="email" />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="your message"
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
          value="SUBMIT"
          className={styles.submit}
        />
      </form>
    </section>
  );
}

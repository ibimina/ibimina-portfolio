import { FaLinkedin, FaGithub, FaTwitter,FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigateTo = useNavigate();

  const [state, handleSubmit] = useForm("xqkjkvkj");

  useEffect(() => {
    if (state.succeeded) {
      navigateTo("/thankyou");
    }
  }, [state.succeeded, navigateTo]);

  return (
    <div id="contact">
      <div className="contact-link">
        <div>
          <h3 className="uppercase abt">Contact</h3>
          <p>
            If you have any questions about me or my projects! I'm available to
            grab a coffee and chat! or just want a quick chat - you can find me
            on social media or you can send me a message here and thanks for
            stopping by!
          </p>
        </div>
        {/* <div className="social"> */}{" "}
        <div className="icons">
          <a
            href="ibimina.c.hart@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaEnvelope />
          </a>
          <a
            href="http://linked/in/ibimina-hart"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="http://github/ibimina"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="http://twitter.com/ibiminaaH"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaTwitter />
          </a>
        </div>
        {/* </div> */}
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        {/* <form netlify name="contact" onSubmit={handleSubmitt}> */}
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="text" name="subject" id="subject" placeholder="subject" />
        <input type="email" name="email" id="email" placeholder="email" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="your message"
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
          className="submit"
        />
        {/* <input type="submit" value="SUBMIT" /> */}
      </form>
    </div>
  );
}

import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const yy = useNavigate();
  const [state, handleSubmit] = useForm("xqkjkvkj");

  useEffect(() => {
    if (state.succeeded) {
      yy("/thankyou");
    }
  }, [state.succeeded, yy]);

  return (
    <div id="contact">
      <div>
        <h3 className="uppercase">Contact</h3>
        <p>
          If you have any questions about me or my projects! I'm available to
          grab a coffee/bubble tea(virtually) and chat! or just want a quick
          chat - you can find me on social media or you can send me a message
          here and thanks for stopping by!
        </p>
        <div className="social"></div>
      </div>
      <form method="POST" onSubmit={handleSubmit}>
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
        <input type="submit" disabled={state.submitting} value="SUBMIT" />
      </form>
    </div>
  );
}

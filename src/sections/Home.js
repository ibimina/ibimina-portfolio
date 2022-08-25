// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <section id="home">
        <figure>
          <img
            src="./images/ibimina.png"
            alt="ibimina hart avatar"
            className="avatar"
          />
        </figure>

        <article>
          <p className="">Hello! I'm ibimina hart</p>
          {/* <p className="uppercase name">ibimina hart</p> */}
          <p className="info">
            A frontend web Developer passionate about creating eye-catching,
            accessible, and user-friendly websites and applications
          </p>
          <div className="social">
            <button className="resume">Resume</button>
            {/* <div className="icons">
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
            </div> */}
          </div>
        </article>
      </section>
    </>
  );
}

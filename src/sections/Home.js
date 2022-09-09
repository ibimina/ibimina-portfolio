
//"homepage": "https://ibimina.github.io/ibimina-portfolio",
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
          <p className="name">
            Hello! I'm Ibimina{" "}
          </p>

          <p className="info">
            An enthusiastic frontend Developer with a passion for creating
            immersive user experience and responsive web applications
          </p>
          <div className="social">
            {/* <button className="resume">Resume</button> */}
         
          </div>
        </article>
      </section>
    </>
  );
}

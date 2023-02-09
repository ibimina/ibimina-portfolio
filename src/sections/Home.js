

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
          <p className="name">Hello! I'm Ibimina. </p>
          <div className="social">
            <a
              href="/images/Ibimina_HART_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              Resume
            </a>
          </div>
        </article>
      </section>
    </>
  );
}

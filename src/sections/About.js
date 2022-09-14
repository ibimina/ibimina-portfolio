
// "homepage": "https://ibimina.github.io/ibimina-portfolio",
export default function About() {
  return (
    <section id="about" className="margin">
      {/* <h2 className="uppercase abt">About me</h2> */}
      <p className="intro">
        I am self-motivated and passionate Frontend Developer currently enrolled
        in
        <span>
          {" "}
          <a
            href="https://www.altschoolafrica.com/"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            Altschool Africa
          </a>
        </span>
        <span> and </span>
        <span>
          <a
            href="https://flgw.org/"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            Frontend Learning Group for Women
          </a>
        </span>
        . I love problem-solving, team-work, and sharing ideas. You can bet that
        I enjoy those exciting moments when I finally succeed in solving any
        problem.
      </p>
      <p>
        Besides coding, I spend most of my free time playing cards games or
        watching movies. So, feel free to reach out to me with any movie
        recommendations!
      </p>
    </section>
  );
}

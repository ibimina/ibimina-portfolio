import styles from "../styles/skills.module.css";
import { FaCode, FaMobileAlt, FaPlug, FaDatabase, FaVial, FaCloud, FaLightbulb } from "react-icons/fa";

const skillCards = [
  {
    icon: FaCode,
    title: "Frontend engineering",
    description: "Responsive product interfaces, reusable components, and configurable design systems.",
    technologies: "React / Next.js / TypeScript / JavaScript / Tailwind CSS / Chakra UI / PrimeReact",
  },
  {
    icon: FaMobileAlt,
    title: "React Native apps",
    description: "Cross-platform health experiences for test booking, results, and vitals tracking.",
    technologies: "React Native / TypeScript / JavaScript",
  },
  {
    icon: FaPlug,
    title: "APIs & integrations",
    description: "Connect product interfaces to services, payment flows, and backend workflows.",
    technologies: "REST APIs / Node.js / NestJS / PHP / Stripe",
  },
  {
    icon: FaDatabase,
    title: "Data & platforms",
    description: "Build data-backed features and maintain content platforms across product needs.",
    technologies: "Prisma / MySQL / MongoDB / Firebase / WordPress",
  },
  {
    icon: FaVial,
    title: "Testing & accessibility",
    description: "Protect critical user flows with automated testing and accessible implementation.",
    technologies: "Playwright / Cypress / Jest / PHPUnit / WCAG / OWASP",
  },
  {
    icon: FaCloud,
    title: "Delivery & cloud",
    description: "Ship and support production features with collaborative delivery workflows.",
    technologies: "GitHub Actions / AWS / Azure DevOps / Vercel",
  },
  {
    icon: FaLightbulb,
    title: "AI-assisted problem-solving",
    description: "Use AI to explore unfamiliar problems and speed up research and iteration, then verify results with product context and tests.",
    technologies: "Research / Solution exploration / Validation",
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.eyebrow}>What I bring</p>
      <h2 className={styles.heading}>Engineering toolkit<span>.</span></h2>
      <p className={styles.intro}>
        I build and ship web and mobile product features, from the interface through testing and release.
      </p>
      <div className={styles.skillCards}>
        {skillCards.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <article className={styles.skillCard} key={skill.title}>
              <div className={styles.cardTopline}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{skill.title}</h3>
              <p className={styles.cardDescription}>{skill.description}</p>
              <p className={styles.technologies}>{skill.technologies}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

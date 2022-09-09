
import data from "../data.json";
export default function Skills() {
  return (
    <div id="skills" className="margin">
      <h2 className="uppercase abt">skills</h2>
      <div className="skill-set">
        {data &&
          data.skills.map((skill) => (
            <figure key={skill.name}>
              <img src={skill.image} alt={skill.alt} />
              <figcaption>{skill.name}</figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
}

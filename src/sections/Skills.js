import { useFetch } from "../hook/useFetch";

export default function Skills() {
  const { data, isLoading, error } = useFetch();


  return (
    <div id="skills">
      <h2 className="uppercase abt">skills</h2>
      <div className="skill-set">
        {error && <>error...</>}
        {isLoading && <>Loading</>}
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

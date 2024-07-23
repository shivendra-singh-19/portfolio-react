import { useEffect, useState } from 'react';

import axios from 'axios';

import { Footer } from './Footer';
import { Header } from './Header';

export function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'http://localhost:7000/skill/',
        });
        console.log('Fetched data successfully');
        const { skills } = data;
        setSkills(skills);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (error != null) {
    console.log(error);
    return <>{JSON.stringify(error)}</>;
  }

  console.log(skills);

  return (
    <>
      <Header />
      <div className="skills-container">
        {skills.map((skill) => {
          return (
            <Skill
              name={skill.name}
              description={skill.description}
              imageUrl={skill.imageUrl}
              key={skill.imageUrl}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

function Skill(props) {
  const { name, description, imageUrl } = props;
  return (
    <>
      <div className="skill-name">{name}</div>
      <SkillDescription description={description} imageUrl={imageUrl} />
    </>
  );
}

function SkillDescription(props) {
  const { description, imageUrl } = props;
  return (
    <div className="skill-description-container">
      <div className="skill-description">{description}</div>
      <div className="skill-imageUrl">
        <img src={imageUrl} className="skill-image" alt="" />
      </div>
    </div>
  );
}

import React from "react";
import "./LogicielSkill.scss";
import {skillsSection} from "../../portfolio";

export default function LogicielSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="logiciel-icons">
          {skillsSection.logicielSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="logiciel-skill-inline"
                name={skills.nom}
              >
                <img src={skills.logo} alt={`Image du logiciel ${skills.nom}`}/>
                <p>{skills.nom}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

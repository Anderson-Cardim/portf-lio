import "./Skills.style.css";
import Tecnologia from "../Tecnologia/index.jsx";
import { SiPostgresql } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const skills = [
  {
    id: 1,
    tecnologia: "HTML",
    imagem: <FaHtml5 size="3.5rem"/>,
  },
  {
    id: 7,
    tecnologia: "CSS",
    imagem: <FaCss3Alt size="3.5rem"/>,
  },
  {
    id: 2,
    tecnologia: "JavaScript",
    imagem: <IoLogoJavascript size="3.5rem"/>,
  },
  {
    id: 3,
    tecnologia: "Typescript",
    imagem: <SiTypescript size="3.5rem"/>,
  },
  {
    id: 4,
    tecnologia: "React",
    imagem: <FaReact size="3.5rem"/>,
  },
  {
    id: 5,
    tecnologia: "SQL",
    imagem: <SiPostgresql  size="3.5rem"/>,
  },
  {
    id: 6,
    tecnologia: "Git",
    imagem: <FaGitSquare size="3.5rem"/>,
  },
  {
    id: 8,
    tecnologia: "Tailwind",
    imagem: <SiTailwindcss size="3.5rem"/>,
  },
  {
    id: 9,
    tecnologia: "Docker",
    imagem: <FaDocker size="3.5rem"/>,
  },
  {
    id: 10,
    tecnologia: "Java",
    imagem: <FaJava size="3.5rem"/>,
  },
];

export default function Skills() {
  return (
    <section className="container">
      <h1 className="skill-name" id="habilidade">Habilidades</h1>
      <p className="skill-tecnologia">tecnologias que domino</p>
      <div className="box-skill">
        {skills.map((item) => {
          return (
            <Tecnologia
              key={item.id}
              tecnologia={item.tecnologia}
              imagem={item.imagem}
            />
          );
        })}
      </div>
    </section>
  );
}

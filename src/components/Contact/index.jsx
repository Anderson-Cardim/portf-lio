import "./contact.styles.css";
import MyContact from "../MyContact/index";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const contato = [
  {
    id: 1,
    name: "Email",
    imagem: <MdOutlineEmail color=" #00f5ff" size="3.5rem" />,
    link: "mailto:anderson10cardim@gmail.com",
  },
  {
    id: 2,
    name: "GitHub",
    imagem: <FaGithub color=" #00f5ff" size="3.5rem"/>,
    link: "https://github.com/Anderson-Cardim",
  },
  {
    id: 3,
    name: "Linkedln",
    imagem: <FaLinkedin color=" #00f5ff" size="3.5rem"/>,
    link: "https://www.linkedin.com/in/anderson-cardim/",
  },
];

export default function Contact() {
  return (
    <section>
      <section className="container">
        <h1 className="title" id="contato">Vamos Conversar?</h1>
        <p className="description">
          Interessado em trabalhar juntos ou tem alguma pergunta? Ficarei feliz
          em conversar!
        </p>

        <div className="box-contact">
          {contato.map((item) => {
            return (
              <MyContact
                key={item.id}
                name={item.name}
                imagem={item.imagem}
                link={item.link}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}

import "./project.styles.css";
import MyProjects from "../MyProjects/index.jsx";

const projects = [
  {
    id: 1,
    img: "/toDo.png",
    title: "ToDO List",
    description:
      "Aplicativo de gerenciamento de tarefas com funcionalidade de adicionar, editar, remover e organizar itens.Aplicativo de gerenciamento de tarefas com funcionalidade de adicionar, editar, remover e organizar itens.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    img: "/screencapture.png",
    title: "TecBoard",
    description:
      "Hub interativo em ReactJS e Vite para a criação e visualização organizada de eventos de tecnologia, com funcionalidades completas de personalização e organização por tema.",
    tecnologias: ["React", "CSS", "JavaScript"],
  },

];

export default function Project() {

  return (
    <section className="project">
      <h1 id="projeto">Meus Projetos</h1>
      <p className="description">Alguns dos trabalhos que desenvolvi</p>

      <div className="box-projetc">
        {projects.map((item) => {
          return (
            <MyProjects
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              tecnologias={item.tecnologias}
            />
          );
        })}
      </div>

    </section>
  );
}

import ContainerAbountI from "../ContainerAbountI";
import "./abount.styles.css";

const abount = [
  {
    id: 1,
    description: "Projeto",
    number: 15,
  },
  {
    id: 2,
    description: "Tecnologias",
    number: 6,
  },
  {
    id: 3,
    description: "Anos Estudando",
    number: 2,
  },
];

export default function Abount() {
  return (
    <section className="abount">
      <h1 id="sobre">Sobre Mim</h1>
      <p>Conheça um pouco da minha trajetória</p>

      {/* <div className="photo-container"></div> */}

      <div className="text-container-abount">
        <p>
          Olá! Eu sou Anderson Cardim, Desenvolvedor Full Stack Júnior em formação, com 1 ano e 6 meses de estudo dedicado à construção de software. Minha paixão é criar soluções eficientes, o que me levou a construir uma base sólida em Java com Spring Boot para o backend , e React com JavaScript/TypeScript para o frontend.
        </p>

        <p>
          Sou proficiente na arquitetura de APIs RESTful e no uso de ferramentas essenciais de mercado, como Docker, Git/GitHub e CI/CD. Além de dominar as linguagens, priorizo a qualidade do código aplicando conceitos de SOLID e Design Patterns.
        </p>

        <p>
          Busco ativamente uma oportunidade para iniciar minha carreira em um ambiente profissional que valorize o desenvolvimento contínuo. Meu objetivo é aplicar esse conjunto de habilidades Full Stack para contribuir ativamente em projetos desafiadores e evoluir como desenvolvedor dentro da empresa.
        </p>
      </div>

      <div className="box-abount">
        {abount.map((item) => {
          return (
            <ContainerAbountI key={item.id} number={item.number}>
              {item.description}
            </ContainerAbountI>
          );
        })}
      </div>
    </section>
  );
}



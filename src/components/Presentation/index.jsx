import Button from "../Button/index";
import "./presentation.styles.css";
import imagem from "../../assets/perfil.png";


export default function Presentation() {

  const handlerProject = () => {
    window.location.href = "#projeto";
  };

  const handlerContact = () => {
    window.location.href = "#contato";
  };

  return (
    <section className="presentation">
      <div className="hero-image">
        <img src={imagem} alt="" />
      </div>
      <div className="text-container">
        <h1>
          Olá, eu sou <span class="gradient-text">Anderson Cardim</span>
        </h1>
        <p>
          Desenvolverdo Web Full Stack
        </p>

        <p>
          Minha expertise se concentra na construção de sistemas ponta a ponta, desde a arquitetura de APIs REST robustas até o desenvolvimento de aplicações web responsivas. Priorizo a performance e a excelente experiência do usuário (UX) em cada etapa do ciclo de desenvolvimento.
        </p>

        <div className="btn-group">
          <Button className="btn-primary" onClick={handlerProject}>Ver Projetos </Button>
          <Button className="btn-secondary" onClick={handlerContact}>Fale Comigo</Button>
        </div>
      </div>
    </section>
  );
}

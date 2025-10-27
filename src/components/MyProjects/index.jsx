import './my-projects.styles.css';

export default function MyProjects({img, title, description, tecnologias}) {
    return (
        <section className="my-projects"> 
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='container-description'>
                <div className='text-container'>
                    <h2>{title}</h2>
                    <span className='description'>{description}</span>
                </div>
                <div className="card-tags">
                    {tecnologias.map((tech, index) => (
                        <span key={index} className={`tag tag-${tech.toLowerCase()}`}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
}
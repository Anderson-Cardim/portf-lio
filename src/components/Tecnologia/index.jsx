import './tecnologia.styles.css'

export default function Tecnologia({tecnologia, imagem}) {

    return (
        <section className='tecnologia'>
            <i>{imagem}</i>
            <p className='tecnologia-name'>{tecnologia}</p>
        </section>
    );
}
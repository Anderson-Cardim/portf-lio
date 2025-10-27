import "./my-contact.styles.css"

export default function MyContact ({ name, imagem, link }) {

    return (
        <a className='tecnologia' href={link} target="_blank">
            {/* <img src={imagem} alt="" className='imagem'/> */}
            <i>{imagem}</i>
            <p className='tecnologia-name'>{name}</p>
        </a>
    );
}
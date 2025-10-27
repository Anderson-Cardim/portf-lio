import './header.styles.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <section className="author">
                    <h2>Anderson Cardim</h2>
                </section>
                <ul className="nav-links">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projeto">Projetos</a></li>
                    <li><a href="#habilidade">Habilidades</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

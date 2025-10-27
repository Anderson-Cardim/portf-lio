import "./footer.styles.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="footer-container">
        <div className="box-footer">
            <div className="social-links">
                <a href="https://github.com/Anderson-Cardim" target="_blank" class="social-link"><FaGithub color=" #00f5ff"/></a>
                <a href="mailto:anderson10cardim@gmail.com" class="social-link"><MdOutlineEmail color=" #00f5ff"/></a>
                <a href="https://www.linkedin.com/in/anderson-cardim/

" class="social-link" target="_blank"><FaLinkedin color=" #00f5ff"/></a>
            </div>

            <div className="description-footer">
                <p>© 2025 Anderson Cardim. Desenvolvido com muita dedicação</p>
            </div>
        </div>
    </footer>
  );
}

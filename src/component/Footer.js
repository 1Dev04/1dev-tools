import "../customCSS/input.css";
import "../customCSS/App.css";


const footer = () => {
    return (

        <footer className="footer ">
            <div className="footer-text">
                <p>© Copyright| Version 4.9  <span className="bi bi-robot"></span></p>
            </div>

            <div className="footer-iconTop">
                <a href="#home"><i className="bx up-arrow bi bi-arrow-bar-up"></i></a>
            </div>
        </footer>
    );
}

export default footer;
import "../customCSS/input.css";
import "../customCSS/App.css";


const footer = () => {
    return (
        <footer className="footer ">
            <div className="footer-text">
                <p>© Copyright| Version 7 </p>
            </div>

            <button className="footer-iconTop broder">
                <a href="#home"><i className="bx up-arrow bi bi-arrow-bar-up"></i></a>
            </button>
        </footer>
    );
}

export default footer;
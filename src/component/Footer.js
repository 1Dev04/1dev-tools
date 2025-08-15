import "../customCSS/input.css";
import "../customCSS/App.css";
import logo from '../asset/logoDev1.png';


const footer = () => {
    return (
        <footer className="footer ">
            
            <img className="logo" src={logo} width={80} height={80} alt="DevTools Logo" />    
            <div className="footer-text">
                <p>© Copyright| Version 1.2 </p>
            </div>

            <button className="footer-iconTop broder">
                <a href="#home"><i className="bx up-arrow bi bi-arrow-bar-up"></i></a>
            </button>
        </footer>
    );
}

export default footer;
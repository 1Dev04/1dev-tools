import "../customCSS/input.css";
import "../customCSS/App.css";
import logo from '../asset/logoDev1.png';

import { version } from "./versionFooter";


const footer = () => {
    return (
        <footer className="footer ">
            
            <img className="logo" src={logo} width={80} height={80} alt="DevTools Logo" />    
            <div className="footer-text">

                {
                    version.map((ver) => (
                        <p key={ver.name}>© Copyright| Version {ver.name}</p>
                    ))
                }
                    
                
             
            </div>

            <button className="footer-iconTop broder">
                <a href="#home"><i className="bx up-arrow bi bi-arrow-bar-up"></i></a>
            </button>
        </footer>
    );
}

export default footer;

import "../customCSS/input.css";
import "../customCSS/App.css";

// import logo from '../asset/logoDev1.png';

import { version } from "./versionFooter";
import { Link } from "react-router-dom";



const FooterForFilter = () => {
    return (
        <footer className="footer ">
            
      
             <Link className="bi bi-box-arrow-in-left back-for-filter   fs-1" to="/#home">  
            </Link>
            <div className="footer-text">

                {
                    version.map((ver) => (
                        <p key={ver.name}>© Copyright| Version {ver.name}</p>
                    ))
                }
                    
                
             
            </div>

            <button className="footer-iconTop broder">
                <a href="#up"><i className="bx up-arrow bi bi-arrow-bar-up"></i></a>
            </button>
        </footer>
    );
}

export default FooterForFilter;
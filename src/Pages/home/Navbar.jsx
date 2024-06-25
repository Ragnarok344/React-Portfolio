import {useState,useEffect} from 'react';
import {Link} from 'react-scroll';

function NavBar (){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }
    const closeMenu = () => {
       setNavActive(false);
    }
    useEffect(() => {
        const handleSize = ()=> {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        }
        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        }
    },[]);
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
        
},[]);
return(
    <nav className={`navbar ${navActive? "active" : ""}`}>
        <div>
        <img  className="nav-bar-logo" src="./img/logo2.jpg" alt="logo" width="100" height="100"/>
        </div>
        <a className={`nav_sandwich ${navActive? "active" : ""}`} onClick={toggleNav}>
            <span className="nav_sandwich_line"></span>
            <span className="nav_sandwich_line"></span>
            <span className="nav_sandwich_line"></span>
        </a>
        <div className={`navbar-items${navActive ? "active" : ""}`}>
            <ul>
            <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="zeroSection" className="navbar-content">Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Portfolio" className="navbar-content">Portfolio</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="About" className="navbar-content">About Me</Link>
                </li>
            </ul>
        </div>
        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>
    </nav>
);
}
export default NavBar;
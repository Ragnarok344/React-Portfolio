import {useState,useEffect} from 'react';
import {Link} from 'react-scroll';
// import {Link} from 'react-router-dom';
//
function NavBar (){
    //useState to manage state of nav bar
    const [navActive, setNavActive] = useState(false);
    //function to toggle nav bar
    const toggleNav = () => {
        setNavActive(!navActive);
    }
    //function to close nav bar
    const closeMenu = () => {
       setNavActive(false);
    }
    //useEffect to add event listener to window to close nav bar when window is resized
    useEffect(() => {
        const handleSize = ()=> {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        }
        //add event listener to window
        window.addEventListener('resize', handleSize);
        return () => {
            //remove event listener from window
            window.removeEventListener('resize', handleSize);
        }
    },[]);
    //useEffect to close nav bar when window is resized to less than 1200px
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
        
},[]);
//returning nav bar
return(
    <nav className={`navbar ${navActive? "active" : ""}`}>
        <div>
        
        </div>
        <a className={`nav_sandwich ${navActive? "active" : ""}`} onClick={toggleNav}>
            <span className="nav_sandwich_line"></span>
            <span className="nav_sandwich_line"></span>
            <span className="nav_sandwich_line"></span>
        </a>
        <div className={`navbar-items${navActive ? "active" : ""}`}>
            <ul>
            <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="zerosection" className="navbar-content">Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="portfolio" className="navbar-content">Portfolio</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Aboutme" className="navbar-content">About Me</Link>
                </li>
            </ul>
        </div>
        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="contact" className="btn btn-outline-primary">Contact Me</Link>
    </nav>
);
}
export default NavBar;
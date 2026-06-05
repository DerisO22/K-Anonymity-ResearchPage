import { NavLink } from 'react-router-dom';
import './Footer.css';
import { handle_scroll_top } from '../util/helpers/scroll_top';
import githubIcon from '../../public/icons/github.png';
import linkedinIcon from '../../public/icons/linkedin.png';

import { Linkedin, Github } from '@boxicons/react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo"></div>

            <div className='footer_line'></div>

            <div className="footer_links_container">
                <NavLink className="footer_link" onClick={handle_scroll_top} to={"/"}>Home</NavLink>
                <NavLink className="footer_link" onClick={handle_scroll_top} to={"/info"}>Background</NavLink>
                <NavLink className="footer_link" onClick={handle_scroll_top} to={"/results"}>Results</NavLink>
            </div>

            <div className='footer_line'></div>

            <div className="socials_container">
                <a href='#' className="social_button"><Linkedin size='sm' /></a>
                <a href='#' className="social_button"><Github size='sm'/></a>
            </div>
        </div>
    )
}

export default Footer;
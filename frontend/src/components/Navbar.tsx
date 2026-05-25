import { NavLink } from "react-router-dom";
import { handle_scroll_top } from "../util/helpers/scroll_top";
import ThemeButton from "./ThemeButton";
import './Navbar.css';

const Navbar = () => {
    const getLinkClass = ({isActive}) => {
        return isActive ? "navbar_link_button active" : "navbar_link_button";
    }

    return (
        <div className="navbar">
            <div className="navbar_links">
                <NavLink className={getLinkClass} onClick={handle_scroll_top} to={"/"}>Home</NavLink>
                <NavLink className={getLinkClass} onClick={handle_scroll_top} to={"/info"}>Background</NavLink>
                <NavLink className={getLinkClass} onClick={handle_scroll_top} to={"/results"}>Results</NavLink>
            </div>

            <ThemeButton />
        </div>
    )
}

export default Navbar;
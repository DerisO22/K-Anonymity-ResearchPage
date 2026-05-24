import { Link } from "react-router-dom";
import { handle_scroll_top } from "../util/helpers/scroll_top";
import ThemeButton from "./ThemeButton";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_links">
                <Link className="navbar_link_button" onClick={handle_scroll_top} to={"/"}>Home</Link>
                <Link className="navbar_link_button" onClick={handle_scroll_top} to={"/info"}>Background</Link>
                <Link className="navbar_link_button" onClick={handle_scroll_top} to={"/results"}>Home</Link>
            </div>

            <ThemeButton />
        </div>
    )
}

export default Navbar;
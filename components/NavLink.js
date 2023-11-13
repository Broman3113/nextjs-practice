import Link from "next/link";
import classes from "../styles/NavLink.module.scss";

const NavLink = ({href, text}) => {
    return (
        <Link href={href} legacyBehavior>
            <a className={classes.link}>{text}</a>
        </Link>
    );
};

export default NavLink;

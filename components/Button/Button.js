import Link from "next/link";
import classes from "./Button.module.scss";
const Button = (props) => {
    return (
        <Link href="/">
            <a className={`${classes.button}`}>Request a quote</a>
        </Link>
    );
};

export default Button;

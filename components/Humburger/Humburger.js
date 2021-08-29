import classes from "./Humburger.module.scss";
import { useState } from "react";
import Socials from "../Footer/Socials/Socials";
import Link from "next/link";

const Humburger = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => {
        setIsOpen((state) => !state);
    };
    return (
        <div className={classes.humburger}>
            <div className={classes.humburger__btn} onClick={onClickHandler}>
                <span
                    className={`${classes.humburger__icon} ${
                        isOpen ? classes.humburger__icon_active : ""
                    }`}
                >
                    &nbsp;
                </span>
            </div>
            <div
                className={`${classes.humburger__bg} ${isOpen ? classes.humburger__bg_active : ""}`}
            ></div>
            <nav
                className={`${classes.humburger__nav} ${
                    isOpen ? classes.humburger__nav_active : ""
                }`}
            >
                <ul className={classes.humburger__list}>
                    {props.items.map((item, i) => (
                        <li className={classes.humburger__item} key={i}>
                            <Link href={item.path}>
                                <a className={`${classes.humburger__link}`}>{item.text}</a>
                            </Link>
                        </li>
                    ))}
                    <li className={classes.humburger__item}>
                        <Link href="/">
                            <a className={`${classes.humburger__link}`}>Let's chat</a>
                        </Link>
                    </li>

                    <div style={{ marginTop: "5rem" }}>
                        <Socials white={true} />
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Humburger;

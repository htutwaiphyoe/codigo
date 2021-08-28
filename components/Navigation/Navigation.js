import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Navigation.module.scss";
import ScrollRevealHOC from "@/hoc/ScrollReveal/ScrollReveal";
import Logo from "./Logo/Logo";
import Button from "../Button/Button";

const Navigation = (props) => {
    return (
        <ScrollRevealHOC top="#header">
            <header className={`${classes.navigation} load-hidden`} id="header">
                <nav className={`${classes.navigation__nav}`}>{props.children()}</nav>
            </header>
        </ScrollRevealHOC>
    );
};

const FullNavigation = (props) => {
    const router = useRouter();
    const items = [
        { path: "/", text: "Work" },
        { path: "/solutions", text: "Solutions" },
        { path: "/services", text: "Services" },
        { path: "/about", text: "About us" },
        { path: "/blog", text: "Blog" },
    ];
    return (
        <Navigation>
            {() => (
                <>
                    <Logo />
                    <div className={`${classes.navigation__menu}`}>
                        <ul className={`${classes.navigation__list}`}>
                            {items.map((item) => (
                                <li
                                    className={`${classes.navigation__item} ${
                                        router.pathname === item.path
                                            ? classes.navigation__active
                                            : ""
                                    }`}
                                    key={item.text}
                                >
                                    <Link href={item.path}>
                                        <a className={`${classes.navigation__link}`}>{item.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button />
                    </div>
                </>
            )}
        </Navigation>
    );
};

const BackNavigation = (props) => {
    return (
        <Navigation>
            {() => (
                <>
                    <ul className={`${classes.navigation__list}`}>
                        <li className={`${classes.navigation__item} `}>
                            <Link href="/">
                                <a className={`${classes.navigation__link}`}>Back to Work</a>
                            </Link>
                        </li>
                    </ul>
                    <Button />
                </>
            )}
        </Navigation>
    );
};
export { FullNavigation, BackNavigation };

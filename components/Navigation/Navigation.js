import Link from "next/link";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import classes from "./Navigation.module.scss";
import ScrollRevealHOC from "@/hoc/ScrollReveal/ScrollReveal";
import Logo from "./Logo/Logo";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import Humburger from "../Humburger/Humburger";

const Navigation = (props) => {
    let [navigationRoot, setNavigationRoot] = useState(null);
    useEffect(() => {
        setNavigationRoot(document.getElementById("nav"));
    }, []);
    return (
        navigationRoot &&
        ReactDOM.createPortal(
            <ScrollRevealHOC top="#header">
                <header className={`${classes.navigation} load-hidden`} id="header">
                    <nav className={`${classes.navigation__nav}`}>{props.children()}</nav>
                </header>
            </ScrollRevealHOC>,
            navigationRoot
        )
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
                    <Humburger items={items} />
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

                    <div className={`${classes.navigation__menu}`}>
                        <Button />
                    </div>

                    <Humburger items={[{ path: "/", text: "Request a quote" }]} />
                </>
            )}
        </Navigation>
    );
};
export { FullNavigation, BackNavigation };

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./Navigation.module.scss";
import ScrollRevealHOC from "@/hoc/ScrollReveal/ScrollReveal";

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
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/site/logo-codigo-red.svg"
                                alt="Codigo Logo"
                                width={145}
                                height={30}
                                className={`${classes.navigation__logo}`}
                            />
                        </a>
                    </Link>

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
                        <Link href="/">
                            <a className={`${classes.navigation__btn}`}>Request a quote</a>
                        </Link>
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

                    <Link href="/">
                        <a className={`${classes.navigation__btn}`}>Request a quote</a>
                    </Link>
                </>
            )}
        </Navigation>
    );
};
export { FullNavigation, BackNavigation };

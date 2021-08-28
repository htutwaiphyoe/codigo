import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./Navigation.module.scss";
import ScrollRevealHOC from "@/hoc/ScrollReveal/ScrollReveal";

const Navigation = (props) => {
    const router = useRouter();
    const items = [
        { path: "/", text: "Work" },
        { path: "/solutions", text: "Solutions" },
        { path: "/services", text: "Services" },
        { path: "/about", text: "About us" },
        { path: "/blog", text: "Blog" },
    ];
    return (
        <ScrollRevealHOC top="#header">
            <header className={`${classes.navigation} load-hidden`} id="header">
                <nav className={`${classes.navigation__nav}`}>
                    <Link href="/" forwardRef>
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

                    <ul className={`${classes.navigation__menu}`}>
                        {items.map((item) => (
                            <li
                                className={`${classes.navigation__item} ${
                                    router.pathname === item.path ? classes.navigation__active : ""
                                }`}
                                key={item.text}
                            >
                                <Link href={item.path}>
                                    <a className={`${classes.navigation__link}`}>{item.text}</a>
                                </Link>
                            </li>
                        ))}

                        <Link href="/">
                            <a className={`${classes.navigation__btn}`}>Request a quote</a>
                        </Link>
                    </ul>
                </nav>
            </header>
        </ScrollRevealHOC>
    );
};

export default Navigation;

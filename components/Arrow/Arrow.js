import Link from "next/link";
import { useEffect, useRef } from "react";
import classes from "./Arrow.module.scss";
const Arrow = ({ icon }) => {
    const arrowRef = useRef();
    useEffect(() => {
        const scrollHandler = () => {
            const detail = document.getElementById("detail");
            const currentYScroll = window.scrollY;
            const sectionHeight = detail.offsetHeight;
            const sectionTop = detail.offsetTop - 500;
            if (currentYScroll < sectionTop + sectionHeight) {
                arrowRef.current.classList.add(classes[`arrow__show_${icon}`]);
            } else {
                arrowRef.current.classList.remove(classes[`arrow__show_${icon}`]);
            }
        };
        window.document.addEventListener("scroll", scrollHandler);

        return () => {
            window.document.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return (
        <Link href="/">
            <div
                className={`${classes.arrow} ${
                    icon === "left" ? classes.arrow_left : classes.arrow_right
                }`}
                ref={arrowRef}
            >
                <i className={`ri-arrow-${icon}-fill ${classes[`arrow__icon_${icon}`]}`}></i>
            </div>
        </Link>
    );
};

export default Arrow;

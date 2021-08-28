import { useEffect } from "react";

function ScrollRevealHOC({ top, right, bottom, left, children }) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "30px",
            duration: 1000,
            // reset: true,
        });
        sr.reveal(left, {
            origin: "left",
            interval: 100,
        });
        sr.reveal(right, {
            origin: "right",
            interval: 100,
        });
        sr.reveal(bottom, {
            origin: "bottom",
            interval: 100,
        });
        sr.reveal(top, {
            origin: "top",
            interval: 100,
        });

        return () => {
            sr.destroy();
        };
    });

    return <>{children}</>;
}

export default ScrollRevealHOC;

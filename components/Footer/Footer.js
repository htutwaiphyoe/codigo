import classes from "./Footer.module.scss";

const Footer = (props) => {
    const footerData = {
        trusts: [
            { title: "Build", description: "Help you build something" },
            { title: "Co-incubate", description: "Co-incubate an idea together" },
            { title: "Customise", description: "Customise a solution for your business" },
            { title: "Organize", description: "Organise learning sessions with us" },
        ],
        socials: [
            { url: "/", icon: "facebook-fill" },
            { url: "/", icon: "twitter-fill" },
            { url: "/", icon: "instagram-fill" },
            { url: "/", icon: "linkedin-fill" },
        ],
    };

    return (
        <footer className={`${classes.footer}`}>
            <h2 className={`${classes.footer__heading}`}>Let's have a chat</h2>
            <div className={`${classes.footer__trusts}`}>
                {footerData.trusts.map((t, i) => (
                    <div className={`${classes.footer__trust}`} key={i}>
                        <h3 className={`${classes.footer__title}`}>{t.title}</h3>
                        <span className={`${classes.footer__description}`}>{t.description}</span>
                    </div>
                ))}
            </div>

            <div className={`${classes.footer__socials}`}>
                {footerData.socials.map((s, i) => (
                    <a href={s.url} className={`${classes.footer__link}`} key={i}>
                        <i className={`ri-${s.icon} ${classes.footer__icon}`}></i>
                    </a>
                ))}
            </div>

            <p className={`${classes.footer__copy}`}>
                Copyright © Codigo - Mobile App Developer Singapore
            </p>
            <p className={`${classes.footer__copy}`}>
                +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
            </p>
        </footer>
    );
};

export default Footer;

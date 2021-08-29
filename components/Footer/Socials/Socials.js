import classes from "./Socials.module.scss";

const Socials = (props) => {
    const socials = [
        { url: "/", icon: "facebook-fill" },
        { url: "/", icon: "twitter-fill" },
        { url: "/", icon: "instagram-fill" },
        { url: "/", icon: "linkedin-fill" },
    ];
    return (
        <div className={`${classes.socials} `}>
            {socials.map((s, i) => (
                <a href={s.url} className={`${classes.socials__link}`} key={i}>
                    <i
                        className={`ri-${s.icon} ${classes.socials__icon}  ${
                            props.white ? classes.socials__icon_white : ""
                        }`}
                    ></i>
                </a>
            ))}
        </div>
    );
};

export default Socials;

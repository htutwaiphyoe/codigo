import classes from "./Headings.module.scss";

const Headings = (props) => {
    const headings = [
        { text: "Here's 5% of", red: false },
        { text: "our published work.", red: false },
        { text: "See 100% of our power", red: true },
    ];
    return headings.map((heading, i) => (
        <p className={`${classes.headings} ${heading.red && classes.headings_red}`} key={i}>
            {heading.text}
        </p>
    ));
};

export default Headings;

import classes from "./Home.module.scss";
import Headings from "./Headings/Headings";
import ScrollRevealHOC from "@/hoc/ScrollReveal/ScrollReveal";

const Home = (props) => {
    const content = {
        categories: [
            "Food & Beverage",
            "Media",
            "Transport & Logistics",
            "Banking & Finance",
            "Lifestyle",
            "Co-incubation",
            "Healthcare",
            "Retail & Entertainment",
            "Telco",
            "Others",
            "Start-ups",
        ],
        types: ["APP", "WEB", "CMS", "UI/UX"],
    };
    return (
        <ScrollRevealHOC bottom="#home">
            <section className={`${classes.home} load-hidden`} id="home">
                <Headings />
                <div className={`${classes.home__content}`}>
                    <div className={`${classes.home__category}`}>
                        <div className={`${classes.home__all}`}>All</div>
                        {content.categories.map((c, i) => (
                            <div key={c}>{c}</div>
                        ))}
                    </div>

                    <div className={`${classes.home__typewrapper}`}>
                        <p className={`${classes.home__legend}`}>Legend</p>
                        <div className={`${classes.home__types}`}>
                            {content.types.map((t, i) => (
                                <div className={`${classes.home__type}`} key={t}>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollRevealHOC>
    );
};

export default Home;

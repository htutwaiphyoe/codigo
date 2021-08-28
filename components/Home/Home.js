import classes from "./Home.module.scss";

const Home = (props) => {
    return (
        <section className={`${classes.home}`}>
            <p className={`${classes.home__title}`}>Here's 5% of</p>
            <p className={`${classes.home__title}`}>our published work.</p>
            <p className={`${classes.home__title} ${classes.home__title_red}`}>
                See 100% of our power
            </p>

            <div className={`${classes.home__content}`}>
                <div className={`${classes.home__category}`}>
                    <div className={`${classes.home__all}`}>All</div>
                    <div>Food &amp; Beverage</div>
                    <div>Media</div>
                    <div>Transport &amp; Logistics</div>
                    <div>Banking &amp; Finance</div>
                    <div>Lifestyle</div>
                    <div>Co-incubation</div>
                    <div>Healthcare</div>
                    <div>Retail &amp; Entertainment</div>
                    <div>Telco</div>
                    <div>Others</div>
                    <div>Start-ups</div>
                </div>

                <div className={`${classes.home__typewrapper}`}>
                    <p className={`${classes.home__legend}`}>Legend</p>
                    <div className={`${classes.home__types}`}>
                        <div className={`${classes.home__type}`}>APP</div>
                        <div className={`${classes.home__type}`}>WEB</div>
                        <div className={`${classes.home__type}`}>CMS</div>
                        <div className={`${classes.home__type}`}>UI/UX</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

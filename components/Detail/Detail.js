import Slide from "./Slide/Slide";
import ScrollRevealHOC from "@/hoc/ScrollReveal/ScrollReveal";
import classes from "./Detail.module.scss";

const Detail = (props) => {
    const details = {
        download: [
            { src: "apple-store", name: "Apple Store" },
            { src: "play-store", name: "Google Play" },
        ],
        features: [
            "Scan to pay",
            "Transfer cash and request payment",
            "ATM QR cash withdrawal",
            "Access exclusive discounts and promotions",
        ],
    };
    return (
        <ScrollRevealHOC bottom="#heading, #download, #description, #features">
            <section className={`${classes.detail}`} id="detail">
                <div className={`${classes.detail__info}`}>
                    <h1 className={`${classes.detail__heading} load-hidden`} id="heading">
                        OCBC Pay Anyone
                    </h1>

                    <div className={`${classes.detail__download} load-hidden`} id="download">
                        {details.download.map((d, i) => (
                            <div className={`${classes.detail__item}`} key={d.name}>
                                <img
                                    src={`/images/site/detail/${d.src}.png`}
                                    alt={d.name}
                                    className={`${classes.detail__image}`}
                                />
                                <p className={`${classes.detail__text}`}>
                                    Avaliable on <br /> {d.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className={`${classes.detail__description} load-hidden`} id="description">
                        You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC
                        Pay Anyone app, and you can even withdraw cash by scanning the QR code at
                        OCBC’s ATMs without your card!
                    </p>

                    <div className={`${classes.detail__featurewrapper} load-hidden`} id="features">
                        <h3 className={`${classes.detail__featureheading}`}>Key Features</h3>
                        <div className={`${classes.detail__features}`}>
                            {details.features.map((f, i) => (
                                <p key={f} className={`${classes.detail__feature}`}>
                                    {f}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <Slide />
            </section>
        </ScrollRevealHOC>
    );
};

export default Detail;

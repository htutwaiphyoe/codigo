import classes from "./Image.module.scss";
import { useRef, useEffect, useState } from "react";

const Image = ({ image }) => {
    const imageRef = useRef();
    const [span, setSpan] = useState(false);
    useEffect(() => {
        if (imageRef.current) {
            if (imageRef.current.naturalWidth > imageRef.current.naturalHeight) {
                setSpan(true);
            }
        }
    }, [span]); 
    return (
        <figure className={`${classes.image} ${span ? classes.image_span : ""}`}>
            <img
                src={`/images/site/home/${image.src}`}
                alt={image.name}
                layout="responsive"
                className={`${classes.image__image}`}
                loading="lazy"
                ref={imageRef}
            />
            <div>
                <p className={`${classes.image__type}`}>{image.type}</p>
                <h3 className={`${classes.image__name}`}>{image.name}</h3>
            </div>

            <div className={`${classes.image__circlewrapper}`}>
                {new Array(image.dots).fill(0).map((d, i) => (
                    <span className={`${classes.image__circle}`} key={i}></span>
                ))}
            </div>
        </figure>
    );
};

export default Image;

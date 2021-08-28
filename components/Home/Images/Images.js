import classes from "./Images.module.scss";
import { images } from "../../../data/data";

import Image from "./Image/Image";

const Images = (props) => {
    return (
        <div className={`${classes.images}`}>
            {images.map((image, i) => (
                <Image image={image} key={i} />
            ))}
        </div>
    );
};

export default Images;

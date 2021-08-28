import Meta from "@/components/Meta/Meta";
import Home from "@/components/Home/Home";
import Images from "@/components/Home/Images/Images";
import { FullNavigation } from "@/components/Navigation/Navigation";

const HomePage = (props) => {
    return (
        <>
            <FullNavigation />
            <Meta />
            <Home />
            <Images />
        </>
    );
};

export default HomePage;

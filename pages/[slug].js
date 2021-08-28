import Meta from "@/components/Meta/Meta";
import { BackNavigation } from "@/components/Navigation/Navigation";
import Detail from "@/components/Detail/Detail";

const HomePage = (props) => {
    return (
        <>
            <Meta />
            <BackNavigation />
            <Detail />
        </>
    );
};

export default HomePage;

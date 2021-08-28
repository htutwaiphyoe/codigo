import Meta from "@/components/Meta/Meta";
import { BackNavigation } from "@/components/Navigation/Navigation";
import Detail from "@/components/Detail/Detail";

const DetailPage = (props) => {
    return (
        <>
            <Meta />
            <BackNavigation />
            <Detail />
        </>
    );
};

export default DetailPage;

import Meta from "@/components/Meta/Meta";
import { BackNavigation } from "@/components/Navigation/Navigation";
import Detail from "@/components/Detail/Detail";
import Arrow from "@/components/Arrow/Arrow";

const DetailPage = (props) => {
    return (
        <>
            <Meta title="OCBC Pay Anyone - Codigo" />
            <Arrow icon="left" />
            <Arrow icon="right" />
            <BackNavigation />
            <Detail />
        </>
    );
};

export default DetailPage;

import Head from "next/head";

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title ? title : "Our iOS, Android &amp; Web Development Work | Codigo"}</title>
            <meta
                name="description"
                content={
                    description
                        ? description
                        : "Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010."
                }
            ></meta>
        </Head>
    );
};

export default Meta;

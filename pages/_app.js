import Layout from "@/components/Layout/Layout";

import "../sass/main.scss";

const App = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;

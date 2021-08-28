import Document, { Html, Head, Main, NextScript } from "next/document";

class Codigo extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="htut wai phyoe, web developer, blogs" />
                    <meta name="theme-color" content="#6E57E0" />
                    <meta property="article:modified_time" content="2021-08-11T14:20:40.000Z" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href="https://www.codigo.co/" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.codigo.co/" />
                    <meta property="og:site_name" content="Codigo" />
                    <meta property="og:image" content="/logo192.png" />

                    <meta name="twitter:card" content="/logo192.png" />
                    <meta name="twitter:image" content="/logo192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Codigo;

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

                    {/* <link
                        href="//db.onlinewebfonts.com/c/51fdf8021065497210ca54837e1601e9?family=Neue+Einstellung"
                        rel="stylesheet"
                        type="text/css"
                    /> */}

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
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

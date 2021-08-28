import Footer from "../Footer/Footer";

const Layout = (props) => {
    return (
        <>
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;

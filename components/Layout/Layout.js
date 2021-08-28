import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
    return (
        <>
            <Navigation />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;

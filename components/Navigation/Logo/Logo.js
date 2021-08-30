import Link from "next/link";

const Logo = (props) => {
    return (
        <Link href="/">
            <a>
                <img
                    src="/images/site/logo-codigo-red.svg"
                    alt="Codigo Logo"
                    width={145}
                    height={30}
                />
            </a>
        </Link>
    );
};

export default Logo;

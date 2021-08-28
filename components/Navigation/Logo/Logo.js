import Link from "next/link";
import Image from "next/image";

const Logo = (props) => {
    return (
        <Link href="/">
            <a>
                <Image
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

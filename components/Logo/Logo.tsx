import Link from "next/link";
import styles from "@/styles/logo.module.scss";

const Logo = () => {
    return (
        <Link href="/">
            <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
        </Link>
    );
};

export default Logo;
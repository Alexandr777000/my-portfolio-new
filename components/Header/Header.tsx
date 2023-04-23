import {Link} from "react-scroll";
import styles from "@/styles/header.module.scss";
import Logo from "@/components/Logo/Logo";

const Header = () => {
    // при перезагрузке стр. она останется на этой секции
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    // const currentMenuItemClass =

    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__container}`}>
                <Logo/>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav__list}>
                        <li className={styles.header__nav__list__item}>
                            <Link
                                className={styles.header__nav__list__item__link}
                                href="/"
                                to="about0"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                            >
                                Обо мне
                            </Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link
                                className={styles.header__nav__list__item__link}
                                href="/"
                                to="about0"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                            >
                                Навыки
                            </Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link
                                className={styles.header__nav__list__item__link}
                                href="/"
                                to="about0"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                            >
                                Портфолио
                            </Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link
                                className={styles.header__nav__list__item__link}
                                href="/"
                                to="about0"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                            >
                                Связаться со мной
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Header;
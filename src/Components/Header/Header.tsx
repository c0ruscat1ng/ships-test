import cl from './Header.module.scss'
import {useState} from "react";

const Header = () => {
    const [activeBurger, setActiveBurger] = useState<boolean>(false)

    const toggleActive = (): void => {
        setActiveBurger(!activeBurger);
    }

    return (
        <header className={cl.header}>
            <div className={cl.header__logo}></div>
            <div className={cl.header__company}>Lesta Games</div>
            <nav className={`${cl.header__navbar} ${activeBurger ? cl.active : ''}`}>
                <ul className={cl.header__list}>
                    <li><a className={cl.header__link} href="">Ships List</a></li>
                    <li><a className={cl.header__link} href="">Contacts</a></li>
                </ul>
            </nav>
            <div className={`${cl.header__burger} ${activeBurger ? cl.active : ''}`}
                 onClick={toggleActive}
            >
                <span className={cl.burger__line}></span>
                <span className={cl.burger__line}></span>
                <span className={cl.burger__line}></span>
            </div>
        </header>
    );
};

export default Header;
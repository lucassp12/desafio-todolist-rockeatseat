import todoLogo from '../assets/todoLogo.svg';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo todo" />
            <strong>to</strong>
            <span>do</span>
        </header>
    )

}
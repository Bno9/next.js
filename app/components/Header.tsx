import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.conteudo}>
        <span className={styles.marca}>Viagens</span>

        <nav>
          <ul className={styles.lista}>
            <li><Link href="/" className={styles.link}>Início</Link></li>
            <li><Link href="/destinos" className={styles.link}>Destinos</Link></li>
            <li><Link href="/contato" className={styles.link}>Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

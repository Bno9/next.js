import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <p className={styles.texto}>&copy; 2026 Viagens. Todos os direitos reservados.</p>
        <p className={styles.texto}>
          Contato:{" "}
          <a href="mailto:contato@viagens.com" className={styles.email}>
            contato@viagens.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

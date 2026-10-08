import styles from "./contato.module.css";

const Contato = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Contato</h1>
            <p className={styles.subtitulo}>
                Dúvidas sobre um destino ou sobre um pacote? Fale com a gente por
                qualquer um dos canais abaixo.
            </p>

            <ul className={styles.lista}>
                <li className={styles.item}>
                    <span className={styles.icone}>✉️</span>
                    <div>
                        <p className={styles.rotulo}>E-mail</p>
                        <a href="mailto:contato@viagens.com" className={styles.valor}>
                            contato@viagens.com
                        </a>
                    </div>
                </li>

                <li className={styles.item}>
                    <span className={styles.icone}>📱</span>
                    <div>
                        <p className={styles.rotulo}>Telefone</p>
                        <a href="tel:+551140028922" className={styles.valor}>
                            (11) 4002-8922
                        </a>
                    </div>
                </li>

                <li className={styles.item}>
                    <span className={styles.icone}>📍</span>
                    <div>
                        <p className={styles.rotulo}>Endereço</p>
                        <p className={styles.valor}>Av. Paulista, 1000 — São Paulo, SP</p>
                    </div>
                </li>

                <li className={styles.item}>
                    <span className={styles.icone}>🕐</span>
                    <div>
                        <p className={styles.rotulo}>Atendimento</p>
                        <p className={styles.valor}>Seg. a sex., das 9h às 18h</p>
                    </div>
                </li>
            </ul>

            <p className={styles.aviso}>
                Respondemos e-mails em até 1 dia útil.
            </p>
        </div>
    );
}

export default Contato;

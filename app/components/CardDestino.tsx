import DestinoProp from "../types/DestinoType";
import styles from "./CardDestino.module.css";

const CardDestino = ({ destino }: { destino: DestinoProp }) => {
    return (
        <article className={styles.card}>
            <div className={styles.media}>
                <img className={styles.imagem} src={destino.imagem} alt={destino.nome} />
            </div>

            <div className={styles.conteudo}>
                <h2 className={styles.nome}>{destino.nome}</h2>
                <p className={styles.descricao}>{destino.descricao}</p>
            </div>
        </article>
    );
}

export default CardDestino;

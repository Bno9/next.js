import DestinoProp from "../types/DestinoType";
import CardDestino from "../components/CardDestino";
import styles from "./destinos.module.css";

const Destinos = () => {

    const destinos: DestinoProp[] = [
    {
        nome: "Rio de Janeiro",
        descricao: "A cidade maravilhosa, famosa por suas praias e pelo Cristo Redentor.",
        imagem: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/330px-Cidade_Maravilhosa.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail "
    },
    {
        nome: "Salvador",
        descricao: "Capital da Bahia, conhecida por seu carnaval e cultura afro-brasileira.",
        imagem: "https://www.civitatis.com/blog/wp-content/uploads/2022/08/tres-dias-salvador.jpg"
    },
    {
        nome: "Foz do Iguaçu",
        descricao: "Lar das famosas Cataratas do Iguaçu, uma das maiores quedas d'água do mundo.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCHvJB8GwgDLsvngl2SylR_qcGlpQNkf0ipdXqhzPCg&s=10"
    },
    {
        nome: "Florianópolis",
        descricao: "Capital de Santa Catarina, conhecida por suas belas praias e vida noturna.",
        imagem: "https://www.civitatis.com/blog/wp-content/uploads/2022/08/florianopolis.jpg"
    },
    {
        nome: "Manaus",
        descricao: "Porta de entrada para a Amazônia, famosa pelo Teatro Amazonas e pelo Encontro das Águas.",
        imagem: "https://www.civitatis.com/blog/wp-content/uploads/2022/08/manaus.jpg"
    }
    ]

    return (
        <div>
            <h1 className={styles.titulo}>Destinos</h1>
            <p className={styles.subtitulo}>Confira nossos destinos turísticos!</p>
            <div className={styles.grade}>
                {destinos.map((destino, index) => (
                    <CardDestino key={index} destino={destino} />
                ))}
            </div>
        </div>
    );
}

export default Destinos;
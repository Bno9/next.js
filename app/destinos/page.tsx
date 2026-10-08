import DestinoProp from "../types/DestinoType";
import CardDestino from "../components/CardDestino";

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
    }
    ]

    return (
        <div>
            <h1 className="text-2xl font-bold">Destinos</h1>
            <p>Confira nossos destinos turísticos!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinos.map((destino, index) => (
                    <CardDestino key={index} destino={destino} />
                ))}
            </div>
        </div>
    );
}

export default Destinos;
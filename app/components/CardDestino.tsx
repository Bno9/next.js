import DestinoProp from "../types/DestinoType";

const CardDestino = ({ destino }: { destino: DestinoProp }) => {   
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={destino.imagem} alt={destino.nome} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{destino.nome}</div>
                <p className="text-gray-700 text-base">{destino.descricao}</p>
            </div>
        </div>
    );
}


export default CardDestino;
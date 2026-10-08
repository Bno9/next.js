import Link from "next/link";
import styles from "./page.module.css";

const diferenciais = [
  {
    icone: "🗺️",
    titulo: "Roteiros prontos",
    texto: "Sugestões de passeios dia a dia, para você não perder tempo planejando.",
  },
  {
    icone: "💰",
    titulo: "Preço justo",
    texto: "Pacotes sem taxas escondidas e com parcelamento em até 12 vezes.",
  },
  {
    icone: "📞",
    titulo: "Suporte na viagem",
    texto: "Atendimento por telefone e e-mail do embarque até a volta para casa.",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className={styles.titulo}>
        Bem-vindo ao site de <span className={styles.destaque}>viagens</span>!
      </h1>
      <p className={styles.subtitulo}>
        Explore os destinos mais incríveis do Brasil e do mundo por um preço justo.
      </p>

      <Link href="/destinos" className={styles.botao}>
        Ver destinos
      </Link>

      <ul className={styles.diferenciais}>
        {diferenciais.map((item) => (
          <li key={item.titulo} className={styles.item}>
            <div className={styles.icone}>{item.icone}</div>
            <h2 className={styles.itemTitulo}>{item.titulo}</h2>
            <p className={styles.itemTexto}>{item.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

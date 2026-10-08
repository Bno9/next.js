import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Viagens</h1>

      <section>
        <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Início</Link></li>
              <li><Link href="/destinos" className="hover:underline">Destinos</Link></li>
              <li><Link href="/contato" className="hover:underline">Contato</Link></li>
            </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
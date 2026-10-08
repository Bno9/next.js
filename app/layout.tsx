import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./layout.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viagens",
  description: "Aplicativo de viagens",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

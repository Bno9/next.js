import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Viagens",
  description: "Aplicativo de viagens",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
    >

      <body className="min-h-full flex flex-col">
        
      <Header></Header>
      {children}
      <Footer></Footer>
      </body>
    </html>
  );
}

import './globals.css';
import {dancingScript, rubik} from "@/helpers/fonts";
import Menu from "@/components/Menu";

export const metadata = {
    title: 'QUIQUE & LILI',
    robots: 'index, follow',
    charSet: 'UTF-8',
    keywords: 'Quique, Lili, Casamiento, nos casamos',
    description: 'Queremos anunciarles que... ¡Nos casamos! Y queremos compartir con ustedes este hermoso momento',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
        title: 'QUIQUE & LILI',
        description: 'Queremos anunciarles que... ¡Nos casamos! Y queremos compartir con ustedes este hermoso momento',
    },
    icons: {
        icon: '/favicons/favicon-16x16.png',
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={"scroll-smooth"}>
        <body className={`${rubik.className} bg-rosita`}>
        	<header className={"py-5 fixed lg:sticky top-0 w-full bg-transparent z-20 transition-all duration-200"}>
                <div className={"container mx-auto flex justify-between items-center overflow-x-hidden px-5"}>
                    <a href="#" className={`${dancingScript.className} text-lg capitalize block w-fit`}>Quique & Lili</a>
                    <Menu />
                </div>
            </header>
            {children}
            <aside id={"mapa"}>
                <h2 className={"sr-only"}>Mapa</h2>
                <iframe
                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.684146393065!2d-58.651792!3d-34.8138875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc354ac839355%3A0x7d990967c66823d!2sCampo%20Cristal%20EVENTOS!5e0!3m2!1ses-419!2sar!4v1689438861997!5m2!1ses-419!2sar"}
                    width={"100%"} height={"320"} allowFullScreen loading={"lazy"}
                    referrerPolicy={"no-referrer-when-downgrade"}></iframe>
            </aside>
        	<footer className={"bg-gray-800"}>
                <p className={"text-center text-white py-5"}>Matías Ezequiel Bubello &copy; { new Date().getFullYear() }</p>
            </footer>
        </body>
    </html>
  )
}

import './globals.css';
import {dancingScript, rubik} from "@/helpers/fonts";
import Menu from "@/components/Menu";
import Script from "next/script";

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
        url: 'https://quique-y-lili.vercel.app/',
    },
    icons: {
        icon: '/favicons/favicon-16x16.png',
    },
}

export default function RootLayout({ children }) {
    return (
    <html lang="es" className={"scroll-smooth"}>
    <head>
        <title>{metadata.title}</title>
        <title>QUIQUE & LILI</title>
        <meta name="description"
              content="Queremos anunciarles que... ¡Nos casamos! Y queremos compartir con ustedes este hermoso momento"/>
        <meta property="og:url" content="https://quique-y-lili.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="QUIQUE & LILI"/>
        <meta property="og:description"
              content="Queremos anunciarles que... ¡Nos casamos! Y queremos compartir con ustedes este hermoso momento"/>
        <meta property="og:image" content="https://quique-y-lili.vercel.app/metadataimage.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="quique-y-lili.vercel.app"/>
        <meta property="twitter:url" content="https://quique-y-lili.vercel.app/"/>
        <meta name="twitter:title" content="QUIQUE & LILI"/>
        <meta name="twitter:description"
              content="Queremos anunciarles que... ¡Nos casamos! Y queremos compartir con ustedes este hermoso momento"/>
        <meta name="twitter:image" content="https://quique-y-lili.vercel.app/metadataimage.png"/>
        <link rel="preload" href="/assets/principal.jpg" as="image"/>
        <link rel="canonical" href="https://quique-y-lili.vercel.app/" />
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-J7WPSNFWJN"}></Script>
        <Script id={"google-analytics"}>
            {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J7WPSNFWJN');`}
        </Script>
        <Script id={"tag-manager-head"}>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPXBX4N4');`}
        </Script>
    </head>
    <body className={`${rubik.className}`}>
    <header className={"py-5 fixed lg:fixed top-0 w-full lg:bg-transparent z-20 transition-all duration-200 bg-principal !bg-opacity-90"}>
                <div className={"container mx-auto flex justify-between items-center overflow-x-hidden px-5"}>
                    <a href="#" className={`${dancingScript.className} text-lg capitalize block w-fit text-white lg:text-black`}>Quique & Lili</a>
                    <Menu />
                </div>
            </header>
            {children}
            <aside id={"mapa"}>
                <h2 className={"sr-only"}>Mapa</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.684146393065!2d-58.651792!3d-34.8138875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc354ac839355%3A0x7d990967c66823d!2sCampo%20Cristal%20EVENTOS!5e0!3m2!1ses-419!2sar!4v1689438861997!5m2!1ses-419!2sar"
                    width="100%" height="320" allowFullScreen loading="lazy"
                    referrerPolicy={"no-referrer-when-downgrade"} />
            </aside>
        	<footer className={"bg-gray-800"}>
                <p className={"text-center text-white py-5"}>Matías Ezequiel Bubello &copy; 2023 - { new Date().getFullYear() }</p>
            </footer>
        <Script id={"tag-manager-body"}>
            {`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPXBX4N4"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`}
        </Script>
        </body>
    </html>
  )
}

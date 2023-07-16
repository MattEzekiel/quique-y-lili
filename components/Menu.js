'use client';

import { useState } from "react";
import StylesHamburguer from 'css/HamburguerMenu.module.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"max-w-full overflow-x-hidden"}>
            <button
                type={"button"}
                className={`${StylesHamburguer.hamburger} lg:hidden`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`${StylesHamburguer.hamburgerSpan} ${isOpen ? StylesHamburguer.abierto : StylesHamburguer.cerrado}`}>
                    {isOpen ? 'Abrir menú' : 'Cerrar menú'}
                </span>
            </button>
            <nav className={`${StylesHamburguer.backdrop} ${isOpen ? StylesHamburguer.backdropShow : StylesHamburguer.backdropHidden} lg:relative lg:right-0 absolute top-16 lg:top-0 transition-all duration-300 ${isOpen ? 'right-0' : 'right-[-100vw]'}`}>
                <ul className={"flex flex-col lg:flex-row gap-x-5 h-screen lg:h-fit bg-rosita px-5 gap-y-5 w-fit"}>
                    <li>
                        <a href="#lugar" className={"uppercase"}>Lugar</a>
                    </li>
                    <li>
                        <a href="#confirmar" className={"uppercase"}>Confirmar asistencia</a>
                    </li>
                    <li>
                        <a href="#regalos" className={"uppercase"}>Regalos</a>
                    </li>
                    <li>
                        <a href="#mapa" className={"uppercase"}>Mapa</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
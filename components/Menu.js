'use client';

import {useEffect, useState} from "react";
import StylesHamburguer from 'css/HamburguerMenu.module.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const lugarSection = document.querySelector('#lugar');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (lugarSection && scrollTop >= lugarSection.offsetTop) {
                header.classList.add('lg:shadow','lg:bg-principal','backdrop-blur');
                header.classList.remove('lg:bg-transparent');
                const tags_a = header.querySelectorAll('a');
                tags_a.forEach(tag_a => {
                    tag_a.classList.remove('lg:text-black');
                })
            } else {
                header.classList.remove('lg:shadow','lg:bg-principal','backdrop-blur');
                header.classList.add('lg:bg-transparent');
                const tags_a = header.querySelectorAll('a');
                tags_a.forEach(tag_a => {
                    tag_a.classList.add('lg:text-black');
                })
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <ul className={"flex flex-col lg:flex-row gap-x-5 h-screen lg:h-fit bg-principal lg:bg-inherit px-5 gap-y-5 w-fit lg:pt-0 pt-10"}>
                    <li>
                        <a href="#lugar" className={"uppercase text-white lg:text-black"}>Lugar</a>
                    </li>
                    <li>
                        <a href="#confirmar" className={"uppercase text-white lg:text-black"}>Confirmar asistencia</a>
                    </li>
                    <li>
                        <a href="#regalos" className={"uppercase text-white lg:text-black"}>Regalos</a>
                    </li>
                    <li>
                        <a href="#mapa" className={"uppercase text-white lg:text-black"}>¿Cómo llegar?</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;

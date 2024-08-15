import React from 'react'
import Postgraduates from './Postgraduates';

export const PostgraduateOffer = () => {
    const navbarHeight = window.innerHeight * 0.08;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    return (
        <>
            <div id="offer" className='flex flex-col items-center py-8 bg-sky-900'>
                <h1 className="text-white font-extrabold text-3xl md:text-4xl 2xl:text-5xl pb-8">
                    Posgrado
                </h1>
                {/*
                <p className='px-1 md:px-16 lg:px-32 text-center text-sm md:text-lg lg:text-xl py-2 md:py-4 lg:py-8 font-medium text-white'>
                    La excelencia académica y la diversidad se unen para ofrecerte una experiencia educativa
                    incomparable. Descubre nuestro abanico de programas educativos, encontrarás el camino perfecto para alcanzar tus metas profesionales. ¡Únete a
                    nosotros y haz realidad tus sueños!</p>
                    */}
                <div className='px-8'>
                    <Postgraduates/>
                </div>

                <a
                    href={`https://www.unsij.edu.mx/servicios_escolares/tutoriales/Guia_de_estudios_posgrado_19.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl underline text-white"
                >
                    Guía de estudios de Posgrado
                </a>
            </div>
        </>
    )
}

export default PostgraduateOffer
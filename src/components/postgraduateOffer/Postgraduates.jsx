import React from 'react'
import { FaFacebook, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import convervacion from "../../assets/unsij/postgraduate/conservacion.jpg";
import gestion from "../../assets/unsij/postgraduate/gestion.jpg";

const postgraduatesData = {
    postgraduate: [
        {
            id: 1,
            "infoColor": "#18592F",
            nombre: 'Maestría en ciencias en conservación de los recursos forestales',
            informacion: 'Esta Maestría pertenece al Programa Nacional de Posgrados de Calidad del Consejo Nacional de Ciencia y Tecnología (CONACYT)',
            imagen: convervacion,
            facebook: "https://www.facebook.com/profile.php?id=100083602172605"
        },
        {
            id: 2,
            nombre: 'Maestría en ciencias en gestión ambiental',
            imagen: gestion
        }
    ]
}


export const Postgraduates = () => {
    return (
        <div className="flex flex-wrap justify-center md:gap-4 xl:gap-8 mx-auto max-w-[100%]">
            {postgraduatesData.postgraduate.map((postgraduate) => (
                <div key={postgraduate.id}
                    className="bg-white shadow-md shadow-white rounded-lg tracking-wide w-full sm:max-w-[350px] mb-8 xl:mb-2">
                    <div className="md:flex-shrink-0">
                        <img src={postgraduate.imagen} alt={postgraduate.nombre}
                            className="w-full h-72 rounded-lg rounded-b-none object-cover" />
                    </div>
                    <div className="p-2 py-4 flex flex-col justify-around h-[300px]">
                        <h2 className="font-bold text-xl text-gray-800 tracking-normal text-center mb-2">{postgraduate.nombre}</h2>
                        <p className="text-sm text-gray-800 flex-grow text-center">
                            {postgraduate.informacion}
                        </p>
                        <div className="flex items-center justify-between px-4">
                            <Link to={`/postgraduate/${postgraduate.id}`}
                                className="text-base rounded-lg text-white bg-orange-600 px-4 py-2 hover:bg-orange-700">
                                Plan de estudios
                            </Link>
                            {postgraduate.facebook && (
                                <a role='button' href={postgraduate.facebook} target="_blank"
                                    rel="noopener noreferrer"
                                    className="inset-0 rounded-full p-2 bg-unsij-daintree-950 hover:bg-blue-900">
                                    <FaFacebookF className='text-3xl text-white' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Postgraduates
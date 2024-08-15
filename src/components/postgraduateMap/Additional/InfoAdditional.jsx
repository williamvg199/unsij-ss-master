import React from 'react'
import {GoDotFill} from "react-icons/go";

export const InfoAdditional = ({ data }) => {

    const { tutoring, bonding} = data; // Aquí desestructuramos data para acceder a las propiedades

    const renderOptions = (options) => (
        <ul className="py-4 px-6 ml-0 md:ml-8 lg:ml-16">
            {Object.entries(options).map(([key, value]) => (
                <li key={key} className="flex items-center justify-start bg-gray-900 py-1 md:py-2 lg:py-3">
                    <div className="flex items-center justify-center mr-3 text-gray-300">
                        <GoDotFill size={20}/>
                    </div>
                    <span className="text-base md:text-base lg:text-2xl text-gray-300">{value}</span>
                </li>
            ))}
        </ul>
    );

    const renderSection = (section, title) => (
        <div className='text-base md:text-xl lg:text-2xl text-white text-start px-8'>
            <h2 className="text-xl md:text-2xl lg:text-4xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                {title}
            </h2>
            {typeof section === 'object' && renderOptions(section)}
        </div>
    );

    return (
        <div className="bg-gray-900">
             <div className='bg-gray-900 max-w-7xl mx-auto py-2 lg:py-4 font-roboto'>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                {data.generation.title}
            </h1>
            {data.generation.options && renderOptions(data.generation.options)}
            {Object.entries(data.generation).map(([key, value]) => (
                key !== 'title' && key !== 'introduction' && key !== 'options' && (
                    <div key={key}>
                        {renderSection(value, value.title || key)}
                    </div>
                )
            ))}
        </div>

            <div className="bg-gray-900 max-w-7xl mx-auto py-2 lg:py-4">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                    {tutoring.title}
                </h1>
                <div className="grid md:grid-cols-3">
                    <p className="md:col-span-2 text-start text-sm md:text-base lg:text-2xl text-gray-400 px-4">
                        {tutoring.content}
                    </p>
                </div>
            </div>


            <div className="bg-gray-900 max-w-7xl mx-auto py-2 lg:py-4">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                    {bonding.title}
                </h1>
                <div className="grid md:grid-cols-3">
                    <p className="md:col-span-2 text-start text-sm md:text-base lg:text-2xl text-gray-400 px-4">
                        {bonding.content}
                    </p>
                </div>
            </div>


            <div id="offer" className='flex flex-col items-center pb-8 z-30 bg-gray-900'>
                <a
                    href={`https://www.unsij.edu.mx/ensenanza.html#ingreso`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl underline text-white"
                >
                    Más información
                </a>
                <a
                    href={`https://www.unsij.edu.mx/servicios_escolares/index.html#formatos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl underline text-white"
                >
                    Formatos
                </a>
            </div>
        </div>
    );
}


export default InfoAdditional

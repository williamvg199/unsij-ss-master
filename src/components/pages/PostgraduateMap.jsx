import React, {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom';
import dataPostgraduate from "../postgraduateMap/DataPostgraduate.js";
import Footer from "../Footer.jsx";
import NavBarPostgraduate from '../navigationBar/NavBarPostgraduate.jsx';
import InfoPostgraduate from '../postgraduateMap/principal/InfoPostgraduate.jsx';
import StudiesPostgraduate from '../postgraduateMap/plan/StudiesPostgraduate.jsx';
import Productivity from '../postgraduateMap/Productivity.jsx';
import InfoAdditional from '../postgraduateMap/Additional/InfoAdditional.jsx';

export const PostgraduateMap = () => {
    const [activeComponent, setActiveComponent] = useState('InfoPostgraduate'); // Componente inicialmente activo
    // Usa el hook useParams para obtener el id de la URL
    const {idPostgraduate} = useParams();
    // Busca el objeto correspondiente al id en el array dataCareers
    const postgraduate = dataPostgraduate.find(postgraduate => postgraduate.id === parseInt(idPostgraduate));
    // Ref para el contenedor
    const contentRef = useRef(null);
    // Verifica si se encontró la carrera
    if (!postgraduate) {
        return <div>No se encontró el posgrado</div>;
    }
    // Extrae el contenido del pósgrado
    const {
        title,
        color,
        introduction,
        name,
        head,
        email,
        address,
        phone,
        objective,
        graduateProfile,
        planEstudios,
        enrolled,
        productivity,
        generation,
        tutoring,
        bonding,
    } = postgraduate.content;
    
// Función para cambiar el componente activo
    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // Al montar el componente, establece 'InfoCareer' como el componente activo
        setActiveComponent('InfoPostgraduate');
        // Calcular la posición de desplazamiento
        const scrollPosition = contentRef.current.offsetTop - (window.innerHeight * 0.30);

        // Hacer scroll hacia el contenedor con desplazamiento suave
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <>
            <NavBarPostgraduate
                onComponentChange={handleComponentChange}
                activeComponent={activeComponent}
                color={color}/>
            <div className='w-full bg-white'>
                <div className="flex flex-col gap-2 items-center justify-center font-roboto">
                    <h1 className="pt-8 font-bold text-xl md:text-2xl lg:text-4xl text-center">{title}</h1>
                    <div className="flex flex-row gap-16 pb-4">
                        <span className="text-xs md:text-base lg:text-xl  italic">{introduction}</span>
                    </div>
                    <div className="flex flex-row gap-16 pb-4">
                        <span className="text-xs md:text-base lg:text-xl  italic">{name}</span>
                        <span className="text-xs md:text-base lg:text-xl  italic">{email}</span>
                        <span className="text-xs md:text-base lg:text-xl  italic">{phone}</span>
                    </div>
                </div>
                {/*
                <span className='text-2xl font-bold py-2'>Plan de estudios</span>
                <span className='text-lg md:text-2xl text-center font-bold'>{title}</span>
                <span className='text-base md:text-xl'>{headOfDepartment}</span>
                <span className='text-base md:text-xl pb-4'>{email}</span>
                */}
                <div ref={contentRef} className='w-full'>
                    {/* Renderizar el componente activo basado en el estado */}
                    {activeComponent === 'InfoPostgraduate' && <InfoPostgraduate data={{objective, graduateProfile}}/>}
                    {activeComponent === 'StudiesPostgraduate' && <StudiesPostgraduate data={{enrolled, planEstudios}}/>}
                    {activeComponent === 'Productivity' && <Productivity data={productivity}/>}
                    {activeComponent === 'InfoAdditional' && <InfoAdditional data={{generation, tutoring, bonding}}/>}
                </div>
            </div>
            <Footer/>
        </>
  )
}


export default PostgraduateMap
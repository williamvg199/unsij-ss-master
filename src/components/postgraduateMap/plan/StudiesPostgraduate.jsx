import React from 'react'
import PropTypes from "prop-types";
import EnrolledPostgraduate from './EnrolledPostgraduate';
import PlanPostgraduate from './PlanPostgraduate';

export const StudiesPostgraduate = ({ data }) => {

    const { enrolled, planEstudios } = data; // Aquí desestructuramos data para acceder a las propiedades

    return (
        <>
            <PlanPostgraduate data={planEstudios}/>
            <EnrolledPostgraduate data={enrolled}/>
        </>
    )
}

StudiesPostgraduate.propTypes = {
    data: PropTypes.shape({
        enrolled: PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    }).isRequired
};

export default StudiesPostgraduate
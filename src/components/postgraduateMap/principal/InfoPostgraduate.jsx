import React from 'react'
import PropTypes from "prop-types";
import ObjetivePostgraduate from './ObjetivePostgraduate';
import ProfilePostgraduate from './ProfilePostgraduate';

export const InfoPostgraduate = ({ data }) => {

    const { objective, graduateProfile } = data; // Aquí desestructuramos data para acceder a las propiedades

    return (
        <div className="bg-gray-900">
            <ObjetivePostgraduate objetive={objective} />
            <ProfilePostgraduate data={graduateProfile} />
        </div>
    )
}

InfoPostgraduate.propTypes = {
    data: PropTypes.shape({
        objective: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    }).isRequired
};

export default InfoPostgraduate
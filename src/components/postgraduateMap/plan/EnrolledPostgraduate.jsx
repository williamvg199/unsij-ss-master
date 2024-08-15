import React from 'react'
import PropTypes from "prop-types";

export const EnrolledPostgraduate = ({ data }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center bg-gray-300 pb-8'>
            <h2 className='text-lg md:text-2xl mt-6 font-bold'>{data.title}</h2>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto mt-4 overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-unsij-daintree-700 text-center">
                            <th className="py-2 px-4 border-b border-gray-300">Generación</th>
                            <th className="py-2 px-4 border-b border-gray-300">Número de alumnos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([key, value]) => {
                            if (key === 'title' || key === 'introduction') return null;
                            return (
                                <tr key={key} className="text-center">
                                    <td className="py-2 px-4 border-b border-gray-300">{value.generation}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">{value.students}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

EnrolledPostgraduate.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}

export default EnrolledPostgraduate
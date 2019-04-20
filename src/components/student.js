import React, { Component } from 'react';
import PropTypes from 'prop-types';



const Student = props => {

    return (

        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.grade}</td>

        </tr>

    )

}

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    grade: PropTypes.number
}

Student.defaultProps = {
    grade: 0
}

export default Student;
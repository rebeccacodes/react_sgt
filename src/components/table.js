import React, { Component } from 'react';
import Student from './student';

class Table extends Component {


    renderTable() {
        const { students } = this.props;

        if (!students) {
            return <h1 className="center">Loading Students</h1>
        }

        if (!students.length) {
            return <h1 className="center">No Students Found</h1>
        }

        const student = this.props.students.map((student) => {
            return <Student key={student.id} id={student.id} name={student.name} course={student.course} grade={student.grade} />;
        })

        return (

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {student}
                </tbody>

            </table>
        )
    }



    render() {

        return (
            <div>
                {this.renderTable()}
            </div >

        );
    }


}

export default Table;

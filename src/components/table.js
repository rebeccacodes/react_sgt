import React, { Component } from 'react';
import axios from 'axios';
import Student from './student';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: null
        }
    }

    componentDidMount() {
        this.getStudents();
    }

    renderTable() {
        const { students } = this.state;

        if (!students) {
            return <h1 className="center">Loading Students</h1>
        }

        if (!students.length) {
            return <h1 className="center">No Students Found</h1>
        }

        const student = this.state.students.map((student) => {
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

    async getStudents() {
        const resp = await axios.get('/data/student_grades.json');

        this.setState({
            students: resp.data.studentGrades
        });
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

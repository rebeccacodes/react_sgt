import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Table from './table';
import AddStudent from './addStudent';
import NavLink from './navLink';


let tempId = 100;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: null
        }
    }

    addStudent = (student) => {
        student.id = tempId++;
        this.setState({
            students: [...this.state.students, student]
        });
    }

    componentDidMount() {
        this.getStudents();
    }

    async getStudents() {
        const resp = await axios.get('/data/student_grades.json');

        this.setState({
            students: resp.data.studentGrades
        });
    }
    render() {
        return (

            <div className="container">
                <h1 className="center">Student Grade Table</h1>
                <div>
                    <NavLink to="/add-student" text="Add Student" color="blue darken-2" />

                </div>

                <Route exact path="/" render={(routingProps) => {
                    return <Table {...routingProps} students={this.state.students} />
                }} />
                <Route path="/add-student" render={(routingProps) => {
                    return <AddStudent {...routingProps} add={this.addStudent} />
                }} />
            </div>

        );

    }
}

export default App;

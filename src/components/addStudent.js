import React, { Component } from 'react';
import Input from './input';
import NavLink from './navLink';

class AddStudent extends Component {
    state = {
        name: '',
        course: '',
        grade: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add({ ...this.state });
        this.props.history.push('/');
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: '',
            course: '',
            grade: ''
        });
    }

    render() {
        const { name, course, grade } = this.state;
        return (
            <div>
                <h4 className="center">Add Student</h4>
                <div>
                    <NavLink to="/" text="Back" color="blue darken-2" />

                </div>
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <Input label="Name" name="name" value={name} onChange={this.handleInputChange} />
                    </div>

                    <div className="row">
                        <Input label="Course" name="course" value={course} onChange={this.handleInputChange} />
                    </div>

                    <div className="row">
                        <Input label="Grade" name="grade" value={grade} onChange={this.handleInputChange} />
                    </div>

                    <button className="waves-effect waves-light btn">Submit</button>
                    <button className="waves-effect waves-light btn" type="button" onClick={this.resetForm}>Reset</button>
                </form>

            </div>
        );
    }
}

export default AddStudent;

import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Table from './table';
import AddStudent from './addStudent';


const App = () => (
    <Router>
        <div className="container">


            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link to="/add-student">Add Student</Link>
                </li>

            </ul>
            <Route exact path="/" component={Table} />
            <Route path="/add-student" component={AddStudent} />

        </div>
    </Router>
);

export default App;

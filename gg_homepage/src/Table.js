import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data1 from './Data/data1.json';
import data2 from './Data/data2.json';
import Card from 'react-bootstrap/Card'


const Table = () => {
    var users = null;
    var employees = null;
    if (data1 ? data1 : null) {
        users = data1.map((data) => {
            return (
                <Card key={data.userId}>
                    <Card.Body>
                        <Card.Title>{data.firstName}&nbsp;{data.lastName}</Card.Title>
                        <Card.Text>{data.emailAddress}</Card.Text>
                    </Card.Body>
                </Card>
            );
        });
    };
    if (data2 ? data2 : null) {
        employees = data2.map((data) => {
            return (
                <Card key={data.userId}>
                    <Card.Body>
                        <Card.Title>{data.firstName}&nbsp;{data.lastName}</Card.Title>
                        <Card.Text>{data.emailAddress}</Card.Text>
                    </Card.Body>
                </Card>
        );
    });
    };
return(<div>
             <div>
        <h3>Users</h3>
        {users}
        </div>
    <br></br>
    <div>
        <h3>Employees</h3>
        {employees}
        </div>
    </div>);
}

export default Table;
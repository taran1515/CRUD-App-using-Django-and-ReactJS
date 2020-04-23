import React, { Component, Fragment } from 'react';
import { Table } from "reactstrap";

class StudentList extends Component{
    render(){
        const students = this.props.students
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Document</th>
                        <th>Registration Date</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length<=0 ? (<div>No Students</div>):
                    (students.map(student => (
                        <tr key={student.pk}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.document}</td>
                            <td>{student.registrationDate}</td>
                        </tr>
                    )))
                    }

                </tbody>
                
            </Table>
        
        )
    }
}

export default StudentList;
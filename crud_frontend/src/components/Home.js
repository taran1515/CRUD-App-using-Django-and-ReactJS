import React, { Fragment } from 'react';
import { API_URL } from '../constants/index';
import axios from 'axios';
import StudentList from './StudentList';

class Home extends React.Component{
    state = {
        students:[],
    }

    getStudents = async() =>{
        const response = await axios.get(API_URL)
        this.setState({
            students:response.data
        })
        // console.log(this.state)
    }

    componentDidMount(){
        this.getStudents()
    }

    resetStudent = () =>{
        this.getStudents()
    }

    render(){
        return(
            <Fragment>
            <h1>Here is list of Students:</h1>
            <StudentList students={this.state.students}/>
            </Fragment>
        );
    }
}

export default Home;
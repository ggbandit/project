import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import './Header.js'
//import Body from './Body.js'
import Header from "./Header";

class App extends Component {
    constructor() {
        super();
        this.state = { student: {} };
        this.onSubmit = this.addDatabase.bind(this);
    }
    componentDidMount(){
        this.getDatabase();
    }
    getDatabase = () => {
        axios.get('http://localhost:4000/getDatabase')
            .then(res => {
                const student = res.data;
                this.setState({ student });
            })
    }

    addDatabase = (e) => {
        e.preventDefault();
        const self = this;
        fetch('http://localhost:4000/add', {
            method: 'POST',
            data: {
                Name: self.refs.Name,
                Faculty: self.refs.Faculty
            }
        })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
            console.log(body);
        });
    }
    //renderStudent = ({ID,Name,Faculty})=> <div key={ID}>{ID} {Name} {Faculty}</div>
    render() {
        return (
            <div>
                <Header/>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Name" ref="name"/>
                    <input type="text" placeholder="Job" ref="job"/>
                    <input type="submit" />
                </form>

                {/*<Body/>*/}
                {/*<Header/>*/}
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {data: ""};
        this.state_2 = {message: []};
        this.onSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/todo/1')
            .then((response) => response.json())
            .then((responseJson) =>{
                this.setState({
                    message: responseJson.data
                });
            })
    }

    handleSubmit(e){
        e.preventDefault();
        const self = this;
        // On submit of the form, send a POST request with the data to the server.
        fetch('/todo/meterla',{
            method: 'POST',
            body:{
                task: self.refs.task.value
            }
        })
            .then(function(response){
                return response.json()
            }).then(function(body){
            console.log(body);
            alert(self.refs.task.value)
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="task" ref="task"/>
                    <input type="submit"/>
                </form>
                <p className="App-intro">
                    Este es el resultado de la consulta = <b>{JSON.stringify(this.state.message)}</b>
                </p>
            </div>
        );
    }
}

export default App;
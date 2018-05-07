import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from './Header.js'
import {
    changeUser,
    fetchUser,
    createUser,
    deleteUser,
    updateUser
} from './actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    state = {
        Name: '',
        Faculty: '',
        Year: '',
        id: '',
        name: '',
        faculty: '',
        year: '',
    };

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});

    }
    handleSubmit = () => {
        this.props.createUser(this.state);
    }
    handleDelete = (e) => {
        const {id} = e.target;
        this.props.deleteUser(id);
    }
    handletoEditform = (e) => {
        const {id} = e.target;
        var userselect = [];
        const {userlist} = this.props.users;
        userlist.map(data => {
            if (data != null)
                return userselect.push(data)
        })
        userselect = userselect.filter(data => data.id == id)
        userselect.map(data => {
            return this.setState({id: data.id, name: data.Name, faculty: data.Faculty, year: data.Year})
        });
    };
    handleUpdate = (e) => {
        const {name, faculty, year, id} = this.state;

        const user = {
            Name: name,
            Faculty: faculty,
            Year: year
        };
        const uid = id
        this.props.updateUser(uid, user)
    }

    render() {
        const {userlist} = this.props.users;
        console.log(userlist);
        console.log('hello');
        const {Name, Faculty, Year, name, faculty, year} = this.state;
        const {
            handleSubmit,
            handleChange,
            handleDelete,
            handletoEditform,
            handleUpdate
        } = this;
        return (
            <div>
                <Header/>
                <Tester Name={Name} Faculty={Faculty} Year={Year}/>
                <br/>
                <div className="center">
                <h1>ADD USER</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="Name" onChange={handleChange} value={Name}/>
                <label htmlFor="">Faculty</label>
                <input type="text" name="Faculty" onChange={handleChange} value={Faculty}/>
                <label htmlFor="">Year</label>
                <input type="text" name="Year" onChange={handleChange} value={Year}/>
                <button onClick={handleSubmit}>Submit</button>
                <h1>Edit USER</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange} value={name}/>
                <label htmlFor="">Faculty</label>
                <input type="text" name="faculty" onChange={handleChange} value={faculty}/>
                <label htmlFor="">Year</label>
                <input type="text" name="year" onChange={handleChange} value={year}/>
                <button onClick={handleUpdate}>Update</button>
                <h1>User in database</h1>
                    {
                        userlist.map((data) => {
                            if (data != null) {
                                return <li key={data.id}>
                                {"ID:" + data.id + " Name: " + data.Name +" "+"Faculty: " + data.Faculty + " Year: " + data.Year}
                                    <button id={data.id} onClick={handletoEditform}>Edit</button>
                                    <button id={data.id} onClick={handleDelete}>Delete</button>
                                </li>
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}

const Tester = (props) => {
    const {Name, Faculty, Year} = props;
    return (
        <div>
            <h1>Helloworld {Name + " " + Faculty + " " +Year}</h1>
        </div>
    )
}

const mapStateToProps = ({users}) => {
    return {
        users,
    }
}

export default connect(mapStateToProps, {changeUser, fetchUser, createUser, deleteUser, updateUser})(App);

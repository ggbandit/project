import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <nav id="navbar">
                    <ul>
                        <li id="a1">TH</li>
                        <li id="a1">EN</li>
                        <li><a className="active" href="">Home</a></li>
                        <li><a href="">Package</a></li>
                        <li><a href="">Review</a></li>
                        <li><a href="">About</a></li>
                    </ul>

                </nav><br/>
                <h1 className="nameTour">Travel Market Prices</h1>
            </header>
        </div>;
    }
}
export default Header;
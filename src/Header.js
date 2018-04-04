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
                        <li><a className="active" href="#home">Home</a></li>
                        <li><a href="#package">Package</a></li>
                        <li><a href="#review">Review</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>

                </nav><br/>
                <h1 className="nameTour">Travel Market Prices</h1>
            </header>
        </div>;
    }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
export default Header;
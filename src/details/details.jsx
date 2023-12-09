import React, { Component } from 'react';
import './mainPage.css';
import { Link } from 'react-router-dom';


class MainPage extends Component {
    state = {  } 
    render() { 
        return (<div>
            <h1 >Hello binary<span>:</span>State from Main Page <span>&gt;_</span></h1>
            <Link to="/">Go to Main page</Link>

        </div>);
    }
}
 
export default MainPage;
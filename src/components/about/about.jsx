import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../mainPage/mainPage.css'; // same html structure & css as in mainPage


class About extends Component {
    state = {  } 
  
    render() { 
        return <div>
            <h1 className='tracking-in-contract'>Hello binary<span className='bold'>:</span>state from About Page <span>&gt;_</span></h1>
            <Link className='link text-focus-in' to="/">Back to Main Page</Link>
        </div>;
    }
}
 
export default About;
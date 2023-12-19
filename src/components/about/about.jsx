import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../mainPage/mainPage.css'; // same html structure & css as in mainPage


class About extends Component {
    state = {  } 
    /**
     * Renders the component and returns the JSX markup.
     *
     * @return {JSX.Element} The JSX markup for the component.
     */
    render() { 
        return (<div>
            <h1 className='tracking-in-contract'>Hello binary<span className='bold'>:</span>State team from About Page <span>&gt;_</span></h1>
            <Link className='link' to="/">Back to main page</Link>

        </div>);
    }
}
 
export default About;
import React, { Component } from 'react';
import './mainPage.css';
import { Link } from 'react-router-dom';


class MainPage extends Component {
    state = {  } 
    /**
     * Render the component.
     *
     * @return {JSX.Element} The rendered component.
     */
    render() { 
        return (<div>
            <h1 className='tracking-in-contract'>Hello binary<span className='bold'>:</span>State team from Main Page <span>&gt;_</span></h1>
            <Link className='link' to="/about">Go to about us page</Link>

        </div>);
    }
}
 
export default MainPage;
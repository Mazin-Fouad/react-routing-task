import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './not-found.css';

class NotFound extends Component {
    state = {  } 
    /**
     * Renders the component.
     *
     * @return {JSX.Element} The rendered component.
     */
    render() { 
        return (
        <div className="not-found">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
            <Link className='link' to="/">Back to main page</Link>
        </div>
  );
    }
}
 
export default NotFound; ; 
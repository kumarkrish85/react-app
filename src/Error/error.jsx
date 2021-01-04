import React from 'react';
import '../css/sign.css';
export class Error extends React.Component {
    render() {
        return <div className='forError'>
            <label forName="error">404 Page Not Found. Click here to go <a href="#">Home</a> </label>
        </div>;
    }
}
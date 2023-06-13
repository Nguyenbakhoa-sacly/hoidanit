
import React from 'react';
import { withRouter } from 'react-router';
import Color from '../HOC/Color'
class Home extends React.Component{


    render() {
        console.log('check Props:', this.props);
        return (
            <div>
                <h1>Hello Home</h1>
            </div>
        )
    }
}

export default Color( Home )
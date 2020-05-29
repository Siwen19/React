import React from 'react';
import Header from './Header';

class About extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header siteName='Beer me!'></Header>
                关于我们
            </div>
        )
    }
}

export default About;
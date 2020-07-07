import React, { Component } from 'react';

class Poem extends Component {
    componentDidMount() {
        console.log(this.p.offsetHeight);
    }
    render() {
        const { content } = this.props;
        return ( 
            <p ref={(p) => this.p = p}>
                { content }
            </p>
         );
    }
}

export default Poem;
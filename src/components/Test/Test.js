import React from 'react';

export default class extends React.Component {
    render(){
        const props = this.props;
        return (<div {...props}>This is test</div>);
    }
}
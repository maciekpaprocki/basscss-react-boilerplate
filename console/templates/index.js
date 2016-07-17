/**
 * Created <%=(new Date()).toUTCString()%>
 * Created by Maciej Paprocki
 */
import {Component} from 'react';

export default class extends Component {
    render(){
        const props = this.props;
        return (<div className="<%=componentClass%>" {...props}>This is test</div>);
    }
}
/**
 * Created Sun, 17 Jul 2016 13:21:05 GMT
 * Created by Maciej Paprocki
 */
import {Component} from 'react';

export default class extends Component {
    render(){
        const props = this.props;
        return (<div className="NavigationPrimary" {...props}>This is test</div>);
    }
}
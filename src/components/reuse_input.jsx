import { Component } from "react";

export default class ReuseInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <label for={this.props.id}>{this.props.name}</label>
                <input id={this.props.id} 
                    name={this.props.name}
                    type="text"
                    value={this.props.value}
                    onChange={this.props.handleChange}/>
            </div>
        );
    }
}
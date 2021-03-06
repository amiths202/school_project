import React, { Component } from "react";

export default class ReuseButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button className="button" onClick={this.props.handleClick}>
                {this.props.value}
                </button>
            </div>
        );
    }
}
const { Component } = require("react");

class Add extends Component{

    state = {
        num1 : 0,
        num2 : 0,
        num3 : 0
    };

    setData  = (e) => {
        this.setState({[e.target.name] : [e.target.value]});
    }

    calculate = () => {
        let res = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({num3 : res})
    }

    render() {
        return (
            <div>
                <h1>Addition of two numbers</h1>
                <hr/>
                <label for="num1">Enter Number 1: </label>
                <input type="text" id="num1" name="num1" onChange={this.setData}/>
                <br/>
                <label for="num2">Enter Number 2: </label>
                <input type="text" id="num2" name="num2" onChange={this.setData}/>
                <br/>
                <label for="num3">Result: </label>
                <input type="text" id="num3" name="num3"  value={this.state.num3}/>
                <br/>
                <input type="button" className="button" name="Add" value="Calculate" onClick={this.calculate}/>
            </div>
        )
    }

}

export default Add;
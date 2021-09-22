import React from 'react';
import {useState} from 'react';
import "../css/counter.css";
import ReuseButton from './reuse_button';

const Counter = () => {

    const incCount = () => {
        setNum(num + 1);
    }

    const decCount = () => {
        setNum(num - 1);
    }

    const f1 = () => {
        if(num === 0) return "blue"
        else if(num > 0) return "green"
        else if(num < 0) return "red"
    }

    let [num, setNum] = useState(0);

    return(
        <div>
            <div>
                <div >
                    <h1>Counter</h1>
                </div>

                <div>
                    <div className={f1()}>{num}</div>
                    <br/>

                    <ReuseButton handleClick={incCount} value="Increase Count"/>
                    <ReuseButton handleClick={decCount} value="Decrease Count"/>

                </div>
            
            </div>
        </div>
    );

}

export default Counter;
import { useState } from "react";

function Counter() {

    let [value,setValue] = useState(0);

    // function incrementValue(){
    //     console.log("HI");
    //     if(value <= 9) {
    //         setValue(value + 1);
    //         setValue(value + 2);
    //         setValue(value + 3);
    //         setValue(value + 2);
    //     }
    // }

    function incrementValue(){
        if(value <= 9) {
            setValue((preValue) => preValue + 1);
            setValue((preValue) => preValue + 1);
            setValue((preValue) => preValue + 1);
            setValue((preValue) => preValue + 1);
        }
    }

    function decrementValue(){
        if(value >= 1) 
            setValue(value - 1);
    }


    return(
        <>
                <button onClick={incrementValue} className="bg-green-400 text-3xl font-bold underline text-center">Increment</button><br />
                <span > {value}</span><br/>
                <button onClick={decrementValue}>Decrement</button>
        </>
    );
};

export default Counter;
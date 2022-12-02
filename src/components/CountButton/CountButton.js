import React, {useState, useEffect} from "react";
// import countbutton css file
import './CountButton.css';

// props are external variables that are passed into the component
// states are internal variables that are created by the component

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        // currentCount++; // this will not update the DOM. We have to use a react hook to update the DOM
        setCurrentCount(currentCount+ props.incrementBy); // this will update the DOM
    }

    const buttonStyles = {
        background: props.buttonColor,
        
    }

    useEffect(() => { // useEffect is a hook that runs after the component has been rendered
        if (currentCount % 10 === 0) {
        console.log('The value is divisible by 10');
        }
    }, [currentCount]); // this will run the useEffect hook after the currentCount changes

    return (
        <div>
            <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    );


};




export default CountButton;
import React from 'react';
import ReactDOM from 'react-dom';
import PercentageBar from './percentagebar.jsx';
import Bar from './bar.jsx'

const Filler = (props) => {
    //console.log(props.percentageOne, 'percentage')
    return(
        <div className="filler" 
         style={{ width: `${props.percentageOne}%`}} 
         style={{ width: `${props.percentageTwo}%`}} 
         style={{ width: `${props.percentageThree}%`}} 
         style={{ width: `${props.percentageFour}%`}} 
         style={{ width: `${props.percentageFive}%`}} />
        
        
        
    )
}

export default Filler
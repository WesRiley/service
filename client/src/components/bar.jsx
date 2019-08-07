import React from 'react';
import ReactDOM from 'react-dom';
import Filler from './filler.jsx'
import PercentageBar from './percentagebar.jsx'
const Bar = (props) => {
    
    return(
        <div className='bar'>
             <Filler 
             percentageOne={props.percentageOne} 
             percentageTwo={props.percentageTwo} 
             percentageThree={props.percentageThree} 
             percentageFour={props.percentageFour} 
             percentageFive={props.percentageFive}/>
         
        </div>
    )
}

export default Bar
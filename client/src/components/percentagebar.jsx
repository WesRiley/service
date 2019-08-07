import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './bar.jsx';
import Filler from './filler.jsx';
import data from '../data'
import index from '../index.jsx'

class PercentageBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percentageOne: 40,
            percentageTwo: 70,
            percentageThree: 50,
            percentageFour: 10,
            percentageFive: 60,
        }
        this.onChange=this.onChange.bind(this)
        // this.findAdverage=this.findAdverage.bind(this)
    }

    
    onChange(){
        let sum = 0
        if(Number(this.props.stars)){
            sum+=1
        }
        this.setState({
            percentage: sum * 10 
        })
    }
    
    // findAdverage() {
    //     this.props.stars.map(function(profile ){
    //         console.log(profile[4], 'valid')
            // if(profile[4]){

    //         // }
    //     })
    // };



    render() {
    //console.log(this.props.stars)  
    // this.findAdverage()  
        return(
            <div>
               1 Star <Bar key='percentageOne' percentageOne={this.state.percentageOne}/>
               2 Star <Bar key='percentageTwo' percentageTwo={this.state.percentageTwo}/> 
               3 Star <Bar percentageThree={this.state.percentageThree}/>
               4 Star <Bar percentageFour={this.state.percentageFour} />
               5 Star <Bar percentageFive={this.state.percentageFive}/>
                
            </div>
        )
    }
}

export default PercentageBar 
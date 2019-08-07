import React from 'react';
import ReactDOM from 'react-dom';
//import data from '../data'

const RatingReviews = (props) => {
    //console.log(props.users[1], 'data')
 return(
    <div className='reviews'>
        <h2 className='positive'>POSITIVE REVIEWS</h2>
        <h2 width='20%' className='negative'>NEGATIVE REVIEWS</h2>

        {props.topTen.map((num,i)=> {
        
        if(Number(props.users[num][4]) >= 3){
            if(i < 10){
             //console.log(user[4],'too small')
         return <div className='goodReviews' key={props.users[num][0]}>  
             <h4 width='20%'className='goodReviews' >user: {props.users[num][1]} </h4> 
             <h5 with='20%' id={props.users[num][0]}> review: {props.users[num][5]} </h5>
            </div>
          }
         }
          if(Number(props.users[num][4]) < 3) {
             if(i < 10){

                 return <div   className='badReviews' key={props.users[num][0]}> 
            <h4 >user: {props.users[num][1]}</h4> 
            <h5 id={props.users[num][0]}> review: {props.users[num][5]}</h5>
            </div>
                }

            }
        
        {/* </div> */}
        
        }
 )}
        
    </div>
   ) 
}

export default RatingReviews
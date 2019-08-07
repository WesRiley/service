import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component'
import axios from 'axios';
import PercentageBar from './components/percentagebar.jsx';
//import data from '../src/data';
import RatingReviews from './components/ratingReviews.jsx';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        id: 0,
        userName: "",
        brand: "",
        item: "",
        stars: 0,
        review: "",
        topTen:[]
      };
       
      this.componentDidMount = this.componentDidMount.bind(this)
      this.onStarClick = this.onStarClick.bind(this)
      this.onChange = this.onChange.bind(this)
      this.onClick = this.onClick.bind(this)
    }
     
      componentDidMount(){
        let users = [];
        while(this.state.topTen.length < 10){
          let min = 0;
          let max = 99;
          let num = Math.floor(Math.random() * (max-min)) + min;
          if(!this.state.topTen.includes(num)){
            this.state.topTen.push(num)
          }
        }
        
    axios.get('/ratings')
    .then((response) => {
      console.log(response.data,'response')
       response.data.map(function(profile ){
        let bucket = [];
        bucket.push(profile.id,profile.userName,profile.brand,profile.item,profile.stars,profile.review);
        users.push(bucket)
       });
       this.setState({
         users: users
       })
       console.log(this.state.users,'users')
      })
      .catch((error) => {
        console.log(error)
      })
      }

      onStarClick(nextValue, prevValue, name) {
      this.setState({stars: nextValue});
      }

      onChange(event){
        event.preventDefault()
        console.log(event.target)
        this.setState({
          review: event.target.value
        })
      }

      onClick() {

      }
    
  
    render() {
      //const{rating} = this.state
  
      return (
        <div>
        <h1 className='header'>Customer Reviews</h1>
        <form id="1">
           <h4>Write Ratings: {this.stars}</h4>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.stars}
          onStarClick={this.onStarClick}/> 
          <input value={this.state.review} onChange={this.onChange}></input>
          <button type='button' onClick={this.onClick}>Post Review</button>
        </form>
        
         <p  key='5stars'>5 stars </p> <PercentageBar/>
         <p  key='4stars'>4 stars </p> <PercentageBar/>
         <p  key='3stars'>3 stars </p> <PercentageBar/>
         <p  key='2stars'>2 stars </p> <PercentageBar/>
         <p  key='1stars'>1 stars </p> <PercentageBar/>
         
        <RatingReviews topTen={this.state.topTen} users={this.state.users} userName={this.state.userName} brand={this.state.brand} item={this.state.item} stars={this.state.stars} review={this.state.review}/>
         {/* <span id='5stars' key='5stars'>5stars <PercentageBar/></span> 
         <span id='4stars' key='4stars'>4stars <PercentageBar/></span> 
         <span id='3stars' key='3stars'>3stars <percentageBar/></span> 
         <span id='2stars' key='2stars'>2stars <PercentageBar/></span> 
         <span id='1stars' key='1stars'>1stars <PercentageBar name={this.state.name} brand={this.state.brand} item={this.state.item} stars={this.state.stars} review={this.state.review}/></span>  */}
        </div>
        
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import Axios from 'axios';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: ''
    }
    this.getReviews = this.getReviews.bind(this);
  }
  getReviews(){
    Axios
      .get('/reviews', { proxy: { port: 3000 }})
      .then(({ data }) => {
        console.log('what is data reviews', data)
        this.setState({
          reviews: data
        })
      })
      .catch((err) => {
        console.log('get failed!', err)
      })
  }
  componentDidMount(){
    this.getReviews();
  }
  render(){
    if (this.state.reviews.length !== 0){
      return (
        <div>
          Jis Reviews
        </div>
      )
    } else {
      return (
        <div>
          Empty Reviews
        </div>
      )
    }
  }
}
export default Reviews;
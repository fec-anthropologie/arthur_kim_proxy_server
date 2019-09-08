import React from 'react';
import Axios from 'axios';

class ProductDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      productDetails: ''
    }
    this.getProductDetails = this.getProductDetails.bind(this);
  }
  getProductDetails(){
    let id = 1;
    Axios
      .get(`/productdetails/${id}`, { proxy: { port: 3000 }})
      .then(({ data }) => {
        console.log('what is data pdetail', data)
        this.setState({
          productDetails: data
        })
      })
      .catch((err) => {
        console.log('get failed!', err)
      })
  }
  componentDidMount(){
    this.getProductDetails();
  }
  render(){
    if (this.state.productDetails.length !== 0){
      return (
        <div>
          Arthurs Product Details
        </div>
      )
    } else {
      return (
        <div>
          Empty ProductDetails
        </div>
      )
    }
  }
}
export default ProductDetails;
import React from 'react';
import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navBar: '',
      productDetail: ''
    }
    this.getNavBar = this.getNavBar.bind(this);
    this.getProductDetail = this.getProductDetail.bind(this);
  }
  getNavBar(){
    Axios
      .get('http://localhost:3000/search', { proxy: { port: 5000 }})
      .then(({ data }) => {
        console.log('what is data', data)
        this.setState({
          navBar: data
        })
      })
      .catch((err) => {
        console.log('get failed!', err)
      })
  }
  getProductDetail(){
    Axios
      .get('http://localhost:4000/api/products/1', { proxy: { port: 5000 }})
      .then(({ data }) => {
        console.log('what is data pdetail', data)
        this.setState({
          productDetail: data
        })
      })
      .catch((err) => {
        console.log('get failed!', err)
      })
  }
  componentDidMount(){
    this.getNavBar();
    this.getProductDetail();
  }
  render(){
    if (this.state.navBar.length !== 0 && this.state.productDetail.length !== 0){
      return (
        <div>
          App!
          <div>Emilys Search
            {/* {this.state.navBar} */}
          </div>
          <div>AK Product Detail
            {/* {this.state.productDetail} */}
          </div>
          <div>Jis Reviews</div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default App;
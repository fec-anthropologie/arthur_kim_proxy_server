import React from 'react';
import Axios from 'axios';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navbar: ''
    }
    this.getNavbar = this.getNavbar.bind(this);
  }  
  getNavbar(){
    Axios
    .get('/search', { proxy: { port: 3000 }})
    .then(({ data }) => {
      console.log('what is data nav', data)
      this.setState({
        navbar: data
      })
    })
    .catch((err) => {
      console.log('get failed!', err)
    })  
  }
  componentDidMount(){
    this.getNavbar();
  }
  render(){
    if (this.state.navbar.length !== 0){
      return (
        <div>
          Emilys search
        </div>
      )
    } else {
      return (
        <div>
          Empty Navbars
        </div>
      )
    }
  }
}
export default Navbar;
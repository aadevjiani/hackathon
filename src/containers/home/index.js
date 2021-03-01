import React from 'react';
import { connect } from 'react-redux'
import { set_data, facebook_login } from '../../store/action'
import './style.css';

class Home extends React.Component {

    static getDerivedStateFromProps(props,state){
      console.log("props==>",props)
      return{

      }
    }
  render(){
      // console.log("Props==>",this.props)
      // let user = {name: "Ali", email: "ali@gmail.com"}
      // console.log("users=>",this.props.users)
      return (
    <div>
      {/* https://recruitment-bank.firebaseapp.com/__/auth/handler */}
      <h1>Recruitment Bank</h1>
      <button onClick={()=>this.props.facebook_login()}>Facebook Login</button>
      {/* <button onClick={()=>this.props.set_data(user)}>SETDATA</button> */}
    </div>
  );
  }
  
}

const mapStateToProps = (state) => ({
  users: state.users
  // name: "Ali_Abbas"
})

const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
  facebook_login: (data) => dispatch(facebook_login())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
/* Css */
import '../assets/css/Login.css';
/* Img */
import { default as logo } from '../assets/img/logo.svg';

/* Services */
import  Apiurl  from '../services/apirest'

/* Axios */
import axios from  'axios'
import reactAxios from  'react-axios'
class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    form: {
      "username": "",
      "password": ""
    },
    error: false,
    errorMsg: "",
  }

  logInSubmit(e){
    e.preventDefault();
  }

  valueChange = async e=> {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
        
      },
     
    })
    console.log(e.target.value);
  }


  submitButton = async e =>{
    
    let header = {
      'x-api-key': 'VAhjFmZNBq4fW1oNXfJ6k43YzKwUbrmT2i8dQchY'
    }

     
    console.log(header)
    axios.post(Apiurl, this.state.form,header)
    .then(response => {
      console.log(response);
      localStorage.setItem("token",response.data.result.token);
        this.props.history.push("/dashboard");
    })
    .catch(error => {
      console.log( error.message)
      this.setState ({
        error: true,
        errorMsg: error.message
      })
      
    
    });
  }
  
  render() {
    return (
      <React.Fragment>
          <div className="container-fluid " id="viewLogin">
            <div className="row d-flex justify-content-center w-100">
              <div className="col-sm-12 col-md-8 col-lg-4">
                <section className="login-block">
                    <article className="login-sec">
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-center">
                      <img src={logo} alt="logo"  className="logo"/>
                      </div>
                    </div>
                      <h2 className="text-center">Login  Api</h2>
                      <form className="login-form" onSubmit={this.logInSubmit}>
                        <div className="form-group">
                          <label for="exampleInputEmail1"  className="text-uppercase">Username</label>
                          <input type="text" className="form-control" name="username" onChange={this.valueChange} placeholder="" />

                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1" className="text-uppercase">Password</label>
                          <input type="password" className="form-control" name="password" onChange={this.valueChange} placeholder="" />
                        </div>
                        <button type="submit" className="btn btn-login mb-3" onClick={this.submitButton} >Submit</button>
                      </form>
                      <div className="copy-text">Created with <i className="fa fa-heart"></i> by Front End</div>

                      {this.state.error === true && 
                        <div className="row">
                          <div className="col-sm-12">
                          <div className="alert alert-danger text-center" role="alert">
                            {this.state.errorMsg}
                          </div>
                          </div>
                        </div>
                          
                        }  
                    </article>
                   
                       
                </section>
              </div>
            </div>
          </div>
        
      </React.Fragment>
    )
  }

}


export default Login;
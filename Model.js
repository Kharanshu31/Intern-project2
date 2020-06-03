import React,{Component} from "react";
import "./Model.css";

class Login extends Component{

  render()
  {
    return (
      <div>
        <form>
          <input className="logininput" placeholder="Email"></input>
          <input className="logininput" placeholder="Password"></input>
          <button className="loginbtn">SignIn</button>
        </form>
      </div>
      )
  }

}

export default Login;

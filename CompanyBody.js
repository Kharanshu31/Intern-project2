import React,{Component} from 'react';
import "./CompanyBody.css";
import {NavLink,Redirect,withRouter} from 'react-router-dom';
import calendar from "../../assets/calendar.svg";

class CompanyBody extends Component{

  onFollow=()=>{
    // console.log(this.props);
    this.props.history.push("/model");
  }

  render(){

  return (
    <div style={{display:"flex"}}>

    <div className="companybody">
      <img src={this.props.imgname} className="companyimg" alt={this.props.alt}/>

      <div style={{display:"block",paddingLeft:"20px"}}>
        <h5>{this.props.comheading}</h5>
        <p className="companybodywritten">{this.props.compara}</p>

        <div style={{display:"flex"}}>
          <img src={calendar} alt="Calender" style={{width:"3%"}}/>
          <p style={{marginLeft:"10px"}}>3 Jun 2020 - 9 Jun 2020</p>
        </div>

      </div>

    </div>

    <div className="status">
      <button className="statusbutton" onClick={this.onFollow}>Follow</button>
      <div className="statusinfo">
        <p className="statuspara">1 day left</p>
      </div>
    </div>

    </div>
  )
  }
}

export default withRouter(CompanyBody);

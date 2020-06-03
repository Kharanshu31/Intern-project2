import React from 'react';
import "./Searchbar.css";
import checked from "../../assets/icons8-checked-checkbox-64.png";
import expire from "../../assets/icons8-expired-100.png";
import soon from "../../assets/icons8-soon-arrow-48.png";
import latest from "../../assets/icons8-eye-26.png";

const Searchbar=()=>{
  return (
    <div className="searchcontainer">
      <input className="searchinput" placeholder="Search"></input>

      <div className="adjacentSearch">
      <img src={checked} className="searchimg" alt="Checked"/>
      <p className="Searchpara">All</p>
      </div>

      <div className="adjacentSearch">
      <img src={latest} className="searchimg" alt="Latest"/>
      <p className="Searchpara">Latest</p>
      </div>

      <div className="adjacentSearch">
      <img src={expire} className="searchimg" alt="Expire"/>
      <p className="Searchpara">Ending</p>
      </div>

      <div className="adjacentSearch">
      <img src={soon} className="searchimg" alt="Soon"/>
      <p className="Searchpara">Expired</p>
      </div>

    </div>
  )
}

export default Searchbar;

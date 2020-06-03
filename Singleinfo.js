import React from 'react';
import "./Singleinfo.css";

const Singleinfo=(props)=>{
  return (
    <div className="infocomponent">
      <img src={props.infoimage} className="infoimg" alt={props.infoalt}/>
      <p className="Infopara">{props.infoparagraph}</p>
    </div>
  )
}

export default Singleinfo;

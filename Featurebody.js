import React from 'react';
import "./Featurebody.css"


const Featurebody=(props)=>{
  return (
      <div className="featurebody">
        <img src={props.featureimg} className="logoimg" alt="Logo"/>
        <div className="featurebodywritten">
          <h5 className="featurebodyheading">{props.featureheading}</h5>
          <p className="featurebodytext">{props.featurecontent}</p>
        </div>
      </div>
  )
}

export default Featurebody;

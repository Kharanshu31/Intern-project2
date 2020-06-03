import React from 'react';
import "./Feature.css"
import Featurebody from "./Featurebody"
import logo from "../../assets/d2clogo.svg"
import d2cigniters from "../../assets/d2cigniters.jpg"
import d2ctreasure from "../../assets/d2ctreasure.jpg";

const Feature=()=>{
  return (
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
]  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="featureflex">
        <Featurebody featureimg={logo} featureheading="D2C Intenship" featurecontent="let us be we in virtual"/>
        <Featurebody featureimg={d2cigniters} featureheading="D2C Igniters" featurecontent="Dare to complete"/>
        <Featurebody featureimg={d2ctreasure} featureheading="D2C Treasure hunt" featurecontent="Dare to complete"/>
      </div>
    </div>
    <div className="carousel-item">
      <div className="featureflex">
      <Featurebody featureimg={logo} featureheading="D2C Intenship" featurecontent="let us be we in virtual"/>
      <Featurebody featureimg={d2cigniters} featureheading="D2C Igniters" featurecontent="Dare to complete"/>
      <Featurebody featureimg={d2ctreasure} featureheading="D2C Treasure hunt" featurecontent="Dare to complete"/>
      </div>
    </div>
    <div className="carousel-item">
      <div className="featureflex">
      <Featurebody featureimg={logo} featureheading="D2C Intenship" featurecontent="let us be we in virtual"/>
      <Featurebody featureimg={d2cigniters} featureheading="D2C Igniters" featurecontent="Dare to complete"/>
      <Featurebody featureimg={d2ctreasure} featureheading="D2C Treasure hunt" featurecontent="Dare to complete"/>
      </div>
    </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
      </a>
  </div>
  </div>
  )
}

export default Feature;

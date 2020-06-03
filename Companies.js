import React from 'react';
import CompanyBody from "./CompanyBody";
import sportsquiz from "../../assets/sportsquiz.png";
import criteo from "../../assets/criteo.png";
import debate from "../../assets/debate.png";
import enactus from "../../assets/enactus.png";
import mpower from "../../assets/mpower.jpg";

const Companies=()=>{
  return (
    <div>
      <CompanyBody imgname={sportsquiz} alt="Sportquiz" comheading="Sport quiz" compara="Project Virzyon"/>
      <CompanyBody imgname={criteo} alt="Criteo" comheading="Ad Operations Specialist" compara="Criteo"/>
      <CompanyBody imgname={debate} alt="Debate" comheading="Online Debate Competition" compara="Fame Technologies"/>
      <CompanyBody imgname={enactus} alt="Enactus" comheading="MakeTimeForThis" compara="Enactus IIT Delhi"/>
      <CompanyBody imgname={mpower} alt="Mpower" comheading="MPOWER Global Citizen Scholarship" compara="MPOWER"/>
      <CompanyBody imgname={sportsquiz} alt="Sportquiz" comheading="Sport quiz" compara="Project Virzyon"/>
      <CompanyBody imgname={criteo} alt="Criteo" comheading="Ad Operations Specialist" compara="Criteo"/>
      <CompanyBody imgname={debate} alt="Debate" comheading="Online Debate Competition" compara="Fame Technologies"/>
      <CompanyBody imgname={enactus} alt="Enactus" comheading="MakeTimeForThis" compara="Enactus IIT Delhi"/>
      <CompanyBody imgname={mpower} alt="Mpower" comheading="MPOWER Global Citizen Scholarship" compara="MPOWER"/>
    </div>
  )
}

export default Companies;

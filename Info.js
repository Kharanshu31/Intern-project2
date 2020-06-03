import React from 'react';
import "./Info.css";
import Searchbar from "../Searchbar/Searchbar";
import Singleinfo from "./Singleinfo"
import competitions from "../../assets/competition.jpg";
import checked from "../../assets/icons8-checked-checkbox-64.png";
import ques from "../../assets/icons8-ask-question-64.png";
import work from "../../assets/icons8-job-seeker-64.png";
import coding from "../../assets/icons8-laptop-coding-50.png";
import scholar from "../../assets/icons8-scholarship-30.png"
import task from "../../assets/icons8-group-task-48.png";
import events from "../../assets/icons8-event-accepted-64.png"
import collegefest from "../../assets/icons8-rock-music-64.png"
import article from "../../assets/icons8-hand-with-pen-100.png"

const Info=(props)=>{
  return (
    <div className="infocontainer">
      <div className="Info">
      <Singleinfo infoimage={checked} infoalt="Checked" infoparagraph="All"/>
      <Singleinfo infoimage={competitions} infoalt="Competition" infoparagraph="Compete"/>
      <Singleinfo infoimage={ques} infoalt="Question" infoparagraph="Question"/>
      <Singleinfo infoimage={work} infoalt="Work" infoparagraph="Jobs"/>
      <Singleinfo infoimage={coding} infoalt="Coding" infoparagraph="Code"/>
      <Singleinfo infoimage={scholar} infoalt="Scholar" infoparagraph="Scholar"/>
      <Singleinfo infoimage={task} infoalt="Task" infoparagraph="Workshop"/>
      <Singleinfo infoimage={events} infoalt="Events" infoparagraph="Events"/>
      <Singleinfo infoimage={collegefest} infoalt="collegefest" infoparagraph="CollegeFest"/>
      <Singleinfo infoimage={article} infoalt="Article" infoparagraph="Articles"/>
        </div>
        <Searchbar />
      </div>
  )
}

export default Info;

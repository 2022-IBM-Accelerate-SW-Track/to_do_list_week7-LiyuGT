import React, { Component } from 'react';
import "./About.css";
import headshot from "../assets/headshot.jpeg" ;
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src={headshot}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Liyu Tenaw</div>
        <div className="brief_description">
          Hello. I am a rising junior at UNC Charlotte. I study Computer Science and I aspire to become Data Scientist. 
        </div>
      </div>
    </div>
      </div>
    )
  }
}

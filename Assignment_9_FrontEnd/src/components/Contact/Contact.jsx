import React from 'react';
import phn from '../Images/telephone.png';
import email from '../Images/gmail.png';
import insta from '../Images/insta.png';
import fb from '../Images/fb.jpg';
import './CSS/style.css';
  
  function Card(props){
      return (
          <div className="card contact-card">
              <div>
                  <img src={phn} className="phn-img" alt="phone"/>
                  <img src={email} className="gm-img" alt="email"/>
                  <img src={insta} className="in-img" alt="insta"/>
                  <img src={fb} className="fb-img" alt="facebook"/>
              </div>
              <div className="card-body">
                  <h5 className="card-title" style={{fontSize: "24px", marginBottom: "10px"}}>{props.title}</h5>
                  <p className="card-text" style={{fontSize: "16px", marginBottom: "20px"}}>{props.text}</p>
                  <a href={props.link} className="btn">{props.buttonText}</a>
              </div>
          </div>
      );
  }
  
  function contact(props){
      const cardData = {
          title: "Contact us",
          text: "Available Mon-Fri 9AM-6PM",
          buttonText: "Visit Us",
          link: "https://careers.linkedin.com/WhyLinkedIn"
      };
  
      return (
          <div className="col">
              <Card
                  title={cardData.title}
                  text={cardData.text}
                  buttonText={cardData.buttonText}
                  link={cardData.link}
              />
          </div>
      );
  }
  
  export default contact;
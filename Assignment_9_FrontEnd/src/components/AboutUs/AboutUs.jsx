import React from 'react';
import Aboutus from '../Images/aboutus.jpg';


function Card(props){
    return (
        <div className="about-card">
            <img className="ab-img" src={props.image} alt="aboutimage" />
            <h2 className = "card-title" style={{fontSize: "24px", marginBottom: "10px"}}>{props.title}</h2>
            <p className = "card-text" >{props.description}</p>
            <a href={props.buttonLink} className="ab-btn">
                {props.buttonText}
            </a>
        </div>
    );
}

function AboutUs(props){
    const cardData = {
        title: "Learn More About us.",
        description: "our main motto is to help people find their jobs. So come join us and find your dream job",
        buttonText: "Click Here",
        buttonLink: "https://careers.linkedin.com/WhyLinkedIn",
        image: Aboutus
    };

    return (
        <Card
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
            buttonLink={cardData.buttonLink}
            image={cardData.image}
        />
    );
}


export default AboutUs;

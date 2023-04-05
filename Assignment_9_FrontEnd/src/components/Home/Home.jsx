import React from 'react';
import homeImage from "../Images/Career.jpg";


function Card(props){
    return (
        <div className="card content">
            <img className="image" src={props.image} alt="homeimage" />
            <h2>{props.title}</h2>
            <p style = {{padding:"20px"}}>{props.description}</p>
            <a href={props.buttonLink} className="btn">
                {props.buttonText}
            </a>
        </div>
    );
}

function Homepage(props){
    const cardData = {
        title: "Find what your passion is.",
        description: "Do your dream job by joing us.",
        buttonText: "Click Here",
        buttonLink: "https://www.google.com/",
        image: homeImage
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

export default Homepage;
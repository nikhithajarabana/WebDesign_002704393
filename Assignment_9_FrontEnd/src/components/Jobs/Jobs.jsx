
import React from 'react';
import hiringImage from "../Images/hiring2.jpg";


function JobCard(props) {
  return (
    <div className="jobs-card">
      <img style = {{width: "392px",height:"100px"}} src={props.image} alt="hiring" />
      <div className='card-body'>
      <h5 className="card-title" style={{fontSize: "24px", marginBottom: "10px"}}>{props.title}</h5>
      <p className="card-text" style={{fontSize: "12px", marginBottom: "30px"}}>{props.description}</p>
      <a href={props.buttonLink} className="jobs-btn">{props.buttonText}</a>
      </div>
    </div>
  );
}

function Jobs(props){
  const jobList = [
    {
      title: 'Application Developer',
      description: 'The application developer will work on building micro platforms in React & Typescript to support new feature dev. or UX enhancements.',
      buttonLink: 'https://careersnam-netbraintech.icims.com/jobs/2376/front-end-software-engineer-intern/job?mobile=false&width=1200&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240',
      buttonText: 'Click here to apply',
      image: hiringImage
    },
    {
      title: 'UIDeveloper',
      description: 'As a UI Software Development Intern, you will collaborate with user interface designers and the rest of our software team to build the interfaces and tools that power our 3D printing workflow.',
      buttonLink: 'https://careers.formlabs.com/job/4855556/apply/?gh_jid=4855556&gh_src=15b541821us',
      buttonText: 'Click here to apply',
      image: hiringImage
    },
    {
      title: 'Intern',
      description: 'As a Software Engineer Intern, you’ll be part of a high-performing development team writing production code running in a high frequency/low latency environment.',
      buttonLink: 'https://jobs.smartrecruiters.com/PublicisGroupe/743999896461048-intern-program-software-engineer-intern',
      buttonText: 'Click here to apply',
      image: hiringImage
    }
  ];

  return (
    <div className="jobs-container" style = {{display:"flex", flex:"row", justifyContent:"center", marginTop:"30px"}}>
      {jobList.map((job, index) => (  //react.map()
        <JobCard
          key={index}
          title={job.title}
          description={job.description}
          buttonText={job.buttonText}
          buttonLink={job.buttonLink}
          image={job.image}
        />
      ))}
    </div>
  );
}

export default Jobs;














































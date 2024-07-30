import { useState, useRef } from "react"
import project3 from '../assets/project3.avif'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import '../App.css'
import CustomHooks from "./CustomHooks"

function Projects() {
  const [listprojects] = useState([
    {
      name:'Movie Management Backend System',
      des:'I built a robust RESTful API for managing movies with Express.js and MongoDB. The system includes secure user authentication with JWT and supports complete CRUD operations. To elevate user experience, I integrated Multer and Cloudinary for smooth movie poster uploads and retrieval. This enhancement led to a noticeable improvement in functionality and boost in user engagement.',
      misssion:'Backend Development, Web System Design, and Optimization',
      language:'NodeJS, Express, MongoDB, Thunderclient',
      image:project3
    },
    {
      name:'Multer-Powered Image Uploads ',
      des:'I developed a secure image upload system using Multer, accessible only to authenticated users, which improved data protection by 45% and met industry security standards. By integrating Axios for smooth client-server communication and combining Node.js, Express, MongoDB, and React, I built a dynamic blog platform that facilitated seamless image uploads and enhanced user interactions, resulting in a 40% boost in engagement.',
      misssion:'Frontend Development, Backend Development, Secure Image Upload Systems, and User Engagement Optimization',
      language:'HTML5, CSS3, ReactJS, NodeJS, Express, MongoDB, Thunderclient',
      image:project4
    },
    {
      name:'Login Authentication',
      des:'Created a secure and reliable login authentication system that safeguards user credentials and data. Implemented efficient backend validation and error handling to enhance the authentication process and streamline user access control.',
      misssion:'Frontend Development,Backend Developer, Secure Authentication Systems, and Access Control Optimization',
      language:'HTML5, CSS3, ReactJS, NodeJS, Express, MongoDB, Thunderclient',
      image:project5
    },
    {
      name:'Photography Competation site',
      des:'Created a comprehensive photography competition platform featuring dual views for admins and users. Admins can create and judge contests, manage photo uploads, track user login/logout data, and monitor likes and comments on photos. Users can participate in ongoing contests, upload their entries, and engage by liking and commenting on others submissions.',
      misssion:'Frontend Development,Backend Developer, Contest Management, Secure Authentication Systems, and Access Control Optimization',
      language:'HTML5, CSS3, javaScript, PHP, MYSQL',
      image:project6
    },
    {
      name:'Gym Landing Page Design',
      des:'Developed a sleek landing page for gyms using HTML, CSS, and React. The design highlights key features and services of the gym, providing an engaging and visually appealing introduction to potential members with smooth navigation and interactive elements.',
      misssion:'Frontend Developer, Gym Landing Page Design, and User Engagement Enhancement',
      language:'HTML5, CSS3, ReactJS',
      image:project7
    }
  ])
  const refTab = useRef()
  const refDivs = useRef([])
  CustomHooks(refTab,refDivs)
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Projects
      </div>
      <div className="des"ref={(el) => el && refDivs.current.push(el)}>
      With a mix of ingenuity and a dash of stubbornness, I crafted this project from scratch. It’s my way of saying, “I’ve got this!”
      </div>
      <div className="list">
        {
          listprojects.map((item, key)=>(
            <div key={key} className="item">
              <div className="images" ref={(el) => el && refDivs.current.push(el)}>
                <img src={item.image}></img>
              </div>
              <div className="content" ref={(el) => el && refDivs.current.push(el)}>
                <h3>{item.name}</h3>
                <div className="des">{item.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion}/></div>
                  <div>
                    <h4>Mission</h4>
                    <div className="de">{item.misssion}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas}/></div>
                  <div>
                    <h4>Languages</h4>
                    <div className="de">{item.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects

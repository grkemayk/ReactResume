import React from 'react'
import ProjectsElement from './projectsElement';
import style from "./styles.module.css"

const Projects = () => {

  return (
    <div className={style.project}>
        <ul className={style.projectList}>
            <li className={style.projectElement}><ProjectsElement 
            projectName="Real Time Object Detection"
            projectCompany="Celal Bayar University"
            projectTerm="2020"
            projectDescription="This is my thesis topic. We made this project three classmates.
            We developed real-time object detection with Python therewithal we used OpenCV and Tensorflow libraries to train our own objects.
            These objects are industrial nuts, bolts and allen wrench. Objects have similar lines but we achieved an accuracy rate of over 90%"
            projectKeywords="Python"
            />
            
            </li>

            
            <li className={style.projectElement}><ProjectsElement 
            projectName="Payment System"
            projectCompany="Mepsan"
            projectTerm="09.2020 - 06.2021"
            projectDescription="We developed payment system for use at gas stations. I was commissioned as part of the created microservices architecture.
            I mostly worked on developing a cash register application with C#. This application has dynamic control properties. In this way, every company can
            integrate this application into their payment systems."
            projectKeywords="Python, C#, JavaScript"
            />
            </li>

            <li className={style.projectElement}><ProjectsElement 
            projectName="Ozone Machine"
            projectCompany="WiserTech"
            projectTerm="06.2021 - Currently"
            projectDescription="I developing industrial textile machines software. Ozone machine is one of them.
            This machines have AI and it depend a Cloud system. We can control and tracking these machines with the cloud system we have developed.
            We can control the reason for the stop and analyze the productivity with OEE systems that we have integrated."
            projectLink="http://www.wisertech.ai/"
            projectKeywords="Java, JavaFX, JavaScript, React.js, Python"
            />
            </li>
            <li className={style.projectElement}><ProjectsElement 
            projectName="Washing Machine"
            projectCompany="WiserTech"
            projectTerm="06.2021 - Currently"
            projectDescription="Washing machine is one of textile machines."
            projectLink="http://www.wisertech.ai/"
            projectKeywords="Java, JavaFX, JavaScript, React.js, Python"
           />
            </li>
            
        </ul>
    </div>
  )
}
export default Projects;

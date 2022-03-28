import React from 'react'
import CareerElement from './careerElement'
import style from "./styles.module.css"

const Career = () => {

  return (
    <div className={style.career}>
        <ul className={style.careerList}>
            <li className={style.careerElement}>
                <CareerElement 
                careerCompany="WiserTech - Izmir / Turkey" 
                careerTitle="Software Engineer"
                careerTerm="06.2021 - Currently"
                careerDefination="We developing industrial textile machine's software. 
                These machines have AI module. In this way we can control and tracking machines with our cloud platform also we entegrated OEE Systems to our machine. 
                This system developed by us."
             />
            </li>
            <li className={style.careerElement}>
                <CareerElement 
                careerCompany="Mepsan - Izmir / Turkey" 
                careerTitle="Software Engineer"
                careerTerm="09.2020 - 06.2021"
                careerDefination="We developed payment system for gas station. I developed rest service for Hazelcast then I developed smart cash register with C#.
                This application has dynamic form properties. Every business can include this app in their payment system.
                 "

             />
            </li>
            <li className={style.careerElement}>
                <CareerElement 
                careerCompany="Bosch Thermotechnik - Manisa / Turkey" 
                careerTitle="Internship"
                careerTerm="02.2020 - 06.2020"
                careerDefination="We worked on component life cycle."
             />
            </li>
           
        </ul>
    </div>
  )
}
export default Career

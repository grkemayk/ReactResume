import React from 'react'
import style from "./styles.module.css"

const CareerElement = (props) => {
    return (
        <div>
            <p className={style.careerCompany}>{props.careerCompany}</p>
            <p className={style.careerTitle}>{props.careerTitle}</p>
            <p className={style.careerTerm}>{props.careerTerm}</p>
            <p className={style.careerDefination}>{props.careerDefination}</p>
            <br></br>
        </div>
      )
}
export default CareerElement;

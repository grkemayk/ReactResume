import React from 'react'
import style from "./styles.module.css"

const CareerElement = (props) => {
    return (
        <div>
            <h3 className={style.careerCompany}>{props.careerCompany}</h3>
            <h4 className={style.careerTitle}>{props.careerTitle}</h4>
            <h5 className={style.careerTerm}>{props.careerTerm}</h5>
            <p className={style.careerDefination}>{props.careerDefination}</p>
            <br></br>
        </div>
      )
}
export default CareerElement;

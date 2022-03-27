import React from 'react'
import style from "./styles.module.css"

const EducationElement = (props) => {

  return (
    <div>
        <p className={style.educationCompany}>{props.educationCompany}</p>
        <p className={style.educationDegree}>{props.educationDegree}</p>
        <p className={style.educationDepartment}>{props.educationDepartment}</p>
        <p className={style.educationGPA}>{props.educationGPA}</p>
        <p className={style.educationTerm}>{props.educationTerm}</p>
        <br></br>
    </div>
  )
}
export default EducationElement;

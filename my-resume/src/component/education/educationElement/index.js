import React from 'react'
import style from "./styles.module.css"

const EducationElement = (props) => {

  return (
    <div>
        <h3 className={style.educationCompany}>{props.educationCompany}</h3>
        <h4 className={style.educationDegree}>{props.educationDegree}</h4>
        <h5 className={style.educationDepartment}>{props.educationDepartment}</h5>
        <h6 className={style.educationTerm}>{props.educationTerm}</h6>
        <h5 className={style.educationGPA}>{props.educationGPA}</h5>
        <br></br>
    </div>
  )
}
export default EducationElement;

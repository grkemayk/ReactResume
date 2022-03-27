import React from 'react'
import EducationElement from './educationElement';
import style from "./styles.module.css"


const Education = () => {

  return (
    <div className={style.education}>
        <ul className={style.educationList}>
            <li className={style.educationElement}>
                    <EducationElement 
                    educationCompany="Ege University" 
                    educationDegree="Master Degree"
                    educationDepartment="Product Lifecycle Managment"
                    educationTerm = "2020 - 2022"
                    />
                </li>
            <li className={style.educationElement}>
                <EducationElement 
                educationCompany="Celal Bayar University" 
                educationDegree="Bachelor's Degree"
                educationDepartment="Electrical - Electronics Engineering"
                educationTerm = "2015 - 2020"
                educationGPA = "3.17 / 4.00"
                />
            </li>
            <li className={style.educationElement}>
                <EducationElement 
                educationCompany="Celal Bayar University" 
                educationDegree="Bachelor's Degree"
                educationDepartment="Computer Engineering"
                educationTerm = "2017 - 2020"
                educationGPA = "2.67 / 4.00"
                />
            </li>
        </ul>
    </div>
  )
}
export default Education;

import React from 'react'
import style from "./styles.module.css"

const ProjectsElement = (props) => {
  return (
    <div>
        <p className={style.projectName}>{props.projectName}</p>
        <p className={style.projectCompany}>{props.projectCompany}</p>
        <p className={style.projectTerm}>{props.projectTerm}</p>
        <p className={style.projectDescription}>{props.projectDescription}</p>
        {props.projectLink ? <a className={style.projectLink} href={props.projectLink} target="_blank">{props.projectLink}</a> : null}
        <p className={style.projectKeywords}><br></br>{props.projectKeywords}</p>
    </div>
  )
}
export default ProjectsElement;

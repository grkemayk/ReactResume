import React from 'react'
import style from "./styles.module.css"

const Skills = () => {
  return (
    <div className={style.skills}>
        <p className={style.skillsTitle}>Skills</p>
        <ul className={style.skillsList}>
            <li className={style.skillsDescription}>Java</li>
            <li className={style.skillsDescription}>JavaFX</li>
            <li className={style.skillsDescription}>Spring Boot</li>
            <li className={style.skillsDescription}>C#</li>
            <li className={style.skillsDescription}>Python</li>
            <li className={style.skillsDescription}>JavaScript</li>
            <li className={style.skillsDescription}>React.js</li>
            <li className={style.skillsDescription}>HTML</li>
            <li className={style.skillsDescription}>CSS</li>
            <li className={style.skillsDescription}>Docker</li>
        </ul>

    </div>
  )
}
export default Skills;

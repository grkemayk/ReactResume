import React from 'react'
import style from "./styles.module.css"

const About = () => {
  return (
    <div className={style.about}>
        <h1 className={style.aboutTitle}>About</h1>
        <p className={style.aboutDescription}>
            Hi everyone. I'm Görkem Aykaç. I was born 1997 in Izmir and now I'm living in Izmir. I graduated from Manisa Celal Bayar University.
            My main department is `Electrical Electronics` Engineering also I studied `Computer Engineering(Double Major Program)`.
            I worked as Software Engineer in different companies since I graduated. Im currently doing master degree on `Product Lifecycle Managment` at Ege University.
            I used React.js when making this app. 
            <br></br>
            <br></br>
            <hr/>
            <br></br>
            <strong>The journey of a thousand miles begins with one step</strong>
            <br></br>
            {/* <h6>(This application is my first step)</h6> */}
        </p>
        
    </div>
  )
}
export default About;

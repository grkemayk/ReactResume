import React from 'react'
import style from "./styles.module.css"

const About = () => {
  return (
    <div>
        <h1 className={style.aboutTitle}>About Me</h1>
        <p className={style.aboutDescription}>
            Hi everyone. Im Görkem Aykaç. I was born 1997 in İzmir and now im living in İzmir. I graduated from Manisa Celal Bayar University.
            My main department is Electrical Electronics Engineering also i studied Computer Engineering(Double Major Program).
            Im working as Software Enigneer in different companies since i graduated. Im currently doing master degree on `Product Lifecycle Managment` at Ege University.
            This web page is my first real application. I used react.js when making this app. 
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

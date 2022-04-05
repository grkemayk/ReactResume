import React from 'react'
import style from "./styles.module.css"
import GithubImage from "./github.png"
import LinkedInImage from "./linkedin.png"
import Download from "./download.png"

const AccountLink = () => {
  console.log("asdasd")
  return (
    <div className={style.accountDiv}>
        <lu className={style.accountList}>
            <li><a href='https://www.linkedin.com/in/g%C3%B6rkem-ayka%C3%A7-315b11180/?originalSubdomain=tr' target="_blank"><img className={style.accountImage} src={LinkedInImage}></img></a></li>
            <li><a href='https://github.com/grkemayk' target="_blank"><img className={style.accountImage} src={GithubImage}></img></a></li>
            <li><a href={require("./file.pdf")} download="Görkem-AYKAÇ"><img className={style.accountImage} src={Download}></img></a></li>

        </lu>
    </div>
  )
}
export default AccountLink;
import React from 'react'
import style from "./styles.module.css"
const AccountLink = () => {
  return (
    <div className={style.accountDiv}>
        <lu className={style.accountList}>
            <li><a href='https://www.linkedin.com/in/g%C3%B6rkem-ayka%C3%A7-315b11180/?originalSubdomain=tr' target="_blank"><img className={style.accountImage} src="https://cdn-icons.flaticon.com/png/512/2626/premium/2626273.png?token=exp=1648550017~hmac=46850d0467cb93f4984d31bf173891b9"></img></a></li>
            <li><a href='https://github.com/grkemayk' target="_blank"><img className={style.accountImage} src="https://cdn-icons-png.flaticon.com/512/270/270798.png"></img></a></li>
        </lu>
    </div>
  )
}
export default AccountLink;
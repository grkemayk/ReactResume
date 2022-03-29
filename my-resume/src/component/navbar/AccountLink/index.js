import React from 'react'
import style from "./styles.module.css"
const AccountLink = () => {
  return (
    <div className={style.accountDiv}>
        <lu className={style.accountList}>
            <li><a href='https://www.linkedin.com/in/g%C3%B6rkem-ayka%C3%A7-315b11180/?originalSubdomain=tr' target="_blank"><img className={style.accountImage} src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504799.png?token=exp=1648461626~hmac=b80e347aebcc30c9356e9f5d08c9db42"></img></a></li>
            <li><a href='https://github.com/grkemayk' target="_blank"><img className={style.accountImage} src="https://cdn-icons-png.flaticon.com/512/733/733553.png"></img></a></li>
        </lu>
    </div>
  )
}
export default AccountLink;
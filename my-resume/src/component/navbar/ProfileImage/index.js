import React from 'react'
import style from "./styles.module.css"
import ProfilePhoto from "./ProfileImage.png"

const ProfileImage = () => {
  return (
 
        <div className={style.person}>
        <div className={style.container}>
            <div className={style.containerInner}>
            <img
                className={style.circle}
                src="https://media2.giphy.com/media/3ohzdZhPORMfnuG3XW/200w.webp?cid=ecf05e479xlgb1ub4mapu06ctyf4937jn54hnkkkefikky2k&rid=200w.webp&ct=g"
            />
            <img
                className={`${style.img} ${style.img1}`}
                src={ProfilePhoto}
            />
            </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.name}>Görkem AYKAÇ</div>
        <div className={style.title}>  Software Engineer</div>
        </div>
 
  )
}
export default ProfileImage;

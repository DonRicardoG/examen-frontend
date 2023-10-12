import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  const { email, name, phone, id, setId, setShow } = props;

  const handleShow = () => {
    setShow(true);
    setId(id);
  };

  return (
    <div onClick={handleShow} className={style.cardContainer}>
      <div className={style.cardImgContainer}>
        <div className={style.cardIcon}></div>
      </div>
      <div className={style.cardText}>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>{phone}</h3>
      </div>
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./ModalB.module.css";
import axios from "axios";
import mailIcon from "../../assets/images/emailIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.svg";
import webIcon from "../../assets/images/webIcon.svg";
import companyIcon from "../../assets/images/companyIcon.svg";

const ModalB = (props) => {
  const { handleClose, show, id } = props;
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = response.data;

        setUserInfo({
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
          website: data.website,
          company: data.company.name,
        });
      } catch (error) {
        console.error("There has been an error", error);
      }
    }

    fetchData();
  }, [id]);

  userInfo && console.log(userInfo);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={style.modalContainer}>
        <div className={style.cardImgContainer}>
          <div className={style.cardIcon}></div>
        </div>
        <div className={style.modalTitles}>
          <h1>{userInfo.name}</h1>
          <p>{userInfo.username}</p>
        </div>
        <ul className={style.modalList}>
          <li>
            <img src={mailIcon} alt="Mail Icon" />
            <p>{userInfo.email}</p>
          </li>
          <li>
            <img src={phoneIcon} alt="Phone Icon" />
            <p>{userInfo.phone}</p>
          </li>
          <li>
            <img src={webIcon} alt="web Icon" />
            <p>{userInfo.website}</p>
          </li>
          <li>
            <img src={companyIcon} alt="Company Icon" />
            <p>{userInfo.company}</p>
          </li>
        </ul>
        <button onClick={handleClose}>close</button>
      </div>
    </Modal>
  );
};

export default ModalB;

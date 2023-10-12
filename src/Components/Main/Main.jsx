import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./Main.module.css";
import ModalB from "../ModalBoost/ModalB";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = response.data;

        setContacts(data);
      } catch (error) {
        console.log("There has been an error:", error);
      }
    }

    fetchData();
  }, []);

  return contacts.length === 0 ? (
    <div className={style.lodingContainer}>
      <div className={style.loader}></div>
    </div>
  ) : (
    <>
      <div className={style.mainContainer}>
        <div className={style.mainTitle}>
          <h1>Contacts</h1>
        </div>
        <div className={style.contactsContainer}>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <Card
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  email={contact.email}
                  setShow={setShow}
                  setId={setId}
                />
              );
            })}
        </div>
      </div>
      {show === true && (
        <ModalB show={show} handleClose={handleClose} id={id} />
      )}
    </>
  );
};

export default Main;

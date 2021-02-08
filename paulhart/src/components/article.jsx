import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import styles from "./article.module.css";

export default function Shop() {
  const [sculptureDetail, setSculptureDetail] = useState({});
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/sculpture`)
      .then((res) => res.json())
      .then((sculptureDetail_) => setSculptureDetail(sculptureDetail_));
  }, []);

  console.log(info);

  return (
    <div className={styles.all}>
      {sculptureDetail.length < 1
        ? ""
        : Object.entries(sculptureDetail).map(([key, item]) => (
            <article className={styles.card}>
              <figure className={styles.figure}>
                <img className={styles.image} alt="" src={item.pic_url} />
                <figcaption className={styles.figcaption}>
                  <h3 className={styles.name}>{item.title}</h3>

                  <span className={styles.price}>{item.price} Euros</span>
                </figcaption>
                <button
                  className={styles.button}
                  type="button"
                  title={`${open ? "Fermer" : "Ouvrir"} le menu de navigation`}
                  onClick={() => {
                    setOpen(!open);
                    setInfo(item);
                  }}
                >
                  Plus d'informations
                </button>
              </figure>
            </article>
          ))}

      <Modal
        isOpen={open}
        onRequestClose={open}
        ariaHideApp={false}
        className={styles.modalcard}
      >
        {info && (
          <article>
            <figure className={styles.modalfigure}>
              <img className={styles.modalimage} alt="" src={info.pic_url} />
              <figcaption className={styles.modalfigcaption}>
                <h3 className={styles.modalname}>{info.title}</h3>
                <h4>{info.thematic}</h4>
                <p className={styles.modaldetails}>{info.details}</p>
                <p className={styles.modalmaterial}>{info.material}</p>
                <span className={styles.modalprice}>{info.price} Euros</span>
                <button
                  className={styles.modalbutton}
                  type="button"
                  title={`${open ? "Fermer" : "Ouvrir"} le menu de navigation`}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Fermer
                </button>
              </figcaption>
            </figure>
          </article>
        )}
      </Modal>
    </div>
  );
}

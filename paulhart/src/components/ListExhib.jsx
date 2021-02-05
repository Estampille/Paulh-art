import styles from "./ListExhib.module.css";
import React, { useEffect, useState } from "react";

export default function Exhibition() {
  const [ListExhib, setListExhib] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/exhibition`)
      .then((res) => res.json())
      .then((ListExhib_) => setListExhib(ListExhib_));
  }, []);

  console.log(ListExhib);
  const placeH = "https://via.placeholder.com/150";

  return (
    <div className={styles.contain}>
      {ListExhib.length < 1
        ? ""
        : Object.entries(ListExhib).map(([key, item]) => (
            <article key={key} className={styles.card}>
              <h2 className={styles.details}>{item.details}</h2>
              <div className={styles.photo}>
                <figure className={styles.figure}>
                  <img className={styles.image} alt="" src={placeH} />
                </figure>
                <figure className={styles.figure}>
                  <img className={styles.image} alt="" src={placeH} />
                </figure>
                <figure className={styles.figure}>
                  <img className={styles.image} alt="" src={placeH} />
                </figure>
              </div>
              <span className={styles.organisation}>
                {item.organisation}, {item.city}
              </span>
              <span className={styles.date}>{item.date}</span>
            </article>
          ))}
    </div>
  );
}

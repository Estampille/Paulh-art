import React, { useEffect, useState } from "react";

import styles from "./article.module.css";

export default function Shop() {
  const [sculptureDetail, setSculptureDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/sculpture`)
      .then((res) => res.json())
      .then((sculptureDetail_) => setSculptureDetail(sculptureDetail_));
  }, []);

  console.log(sculptureDetail);

  return (
    <div className={styles.all}>
      {sculptureDetail.length < 1
        ? ""
        : Object.entries(sculptureDetail).map(([key, item]) => (
            <article className={styles.card}>
              <figure className={styles.figure}>
                <img className={styles.image} alt="" src={item.pic_url} />
                <figcaption className={styles.figcaption}>
                  <h2 className={styles.name}>{item.title}</h2>
                  <p className={styles.material}>{item.material}</p>
                  <span className={styles.price}>{item.price} Euros</span>
                </figcaption>
              </figure>
            </article>
          ))}
    </div>
  );
}

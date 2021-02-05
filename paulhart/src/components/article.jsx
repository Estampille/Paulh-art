import React, { useEffect, useState } from "react";

import styles from "./article.module.css";

export default function Shop() {
  const [sculptureDetail, setSculptureDetail] = useState({});
  console.log(sculptureDetail);

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((res) => res.json())
      .then((sculptureDetail_) => setSculptureDetail(sculptureDetail_));
  }, []);

  console.log(sculptureDetail);

  return (
    <div className={styles.all}>
      {sculptureDetail.length < 2
        ? ""
        : Object.entries(sculptureDetail).map(([key, item]) => (
            <article className={styles.card}>
              <figure className={styles.figure}>
                <img className={styles.image} alt="" src={item.pic_url} />
                <figcaption className={styles.figcaption}>
                  <h2 className={styles.name}>{item.title}</h2>
                  <span className={styles.price}>{item.price}</span>
                </figcaption>
              </figure>
            </article>
          ))}
    </div>
  );
}

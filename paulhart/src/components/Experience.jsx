import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  const [experiences, setExperiences] = useState({
    stageData: null,
    emploiData: null,
    formationData: null,
    concoursData: null,
    residenceData: null,
  });

  useEffect(() => {
    fetch(`http://localhost:5000/experience`)
      .then((res) => res.json())
      .then((experiences_) => setExperiences(experiences_));
  }, []);

  console.log(experiences.residenceData);

  return (
    <div className={styles.cv}>
      <div className={styles.section}>
        <h2 className={styles.categ}>Residences</h2>
        <div className={styles.stage}>
          {experiences.residenceData < 1
            ? ""
            : experiences.residenceData.map((item) => (
                <article key={item.id} className={styles.card}>
                  <h3 className={styles.name}>
                    {item.organisation}, {item.city}.
                  </h3>
                  <p className={styles.details}>{item.details}</p>
                  <span className={styles.price}>{item.date}</span>
                </article>
              ))}
        </div>
        <div />

        <div className={styles.section}>
          <h2 className={styles.categ}>Emplois</h2>
          <div className={styles.emploi}>
            {experiences.emploiData < 1
              ? ""
              : experiences.emploiData.map((item) => (
                  <article key={item.id} className={styles.card}>
                    <h3 className={styles.name}>
                      {item.organisation}, {item.city}.
                    </h3>
                    <p className={styles.details}>{item.details}</p>
                    <span className={styles.price}>{item.date}</span>
                  </article>
                ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.categ}>Concours</h2>
          <div className={styles.stage}>
            {experiences.concoursData < 1
              ? ""
              : experiences.concoursData.map((item) => (
                  <article key={item.id} className={styles.card}>
                    <h3 className={styles.name}>
                      {item.organisation}, {item.city}.
                    </h3>
                    <p className={styles.details}>{item.details}</p>
                    <span className={styles.price}>{item.date}</span>
                  </article>
                ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.categ}>Stage</h2>
          <div className={styles.stage}>
            {experiences.stageData < 1
              ? ""
              : experiences.stageData.map((item) => (
                  <article key={item.id} className={styles.card}>
                    <h3 className={styles.name}>
                      {item.organisation}, {item.city}.
                    </h3>
                    <p className={styles.details}>{item.details}</p>
                    <span className={styles.price}>{item.date}</span>
                  </article>
                ))}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.categ}>Formation artistique</h2>
        <div className={styles.stage}>
          {experiences.formationData < 1
            ? ""
            : experiences.formationData.map((item) => (
                <article key={item.id} className={styles.card}>
                  <h3 className={styles.name}>
                    {item.organisation}, {item.city}.
                  </h3>
                  <p className={styles.details}>{item.details}</p>
                  <span className={styles.date}>{item.date}</span>
                </article>
              ))}
        </div>
      </div>
    </div>
  );
}

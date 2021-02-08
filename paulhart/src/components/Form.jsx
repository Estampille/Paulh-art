import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [create_date, setCreate_date] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState(null);
  const [ajout, setAjout] = useState(null);
  const [date, setDate] = useState("");
  const [thematic, setThematic] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [exhibition, setExhibition] = useState("");
  const [title, setTitle] = useState("");
  const [pic_url, setPic_url] = useState("");
  const sculpture = "sculpture";

  const postExhib = {
    category,
    organisation,
    date,
    details,
    city,
  };

  const postSculpture = {
    sculpture,
    title,
    thematic,
    details,
    material,
    create_date,
    category,
    price,
    pic_url,
  };

  console.log(postExhib);
  return (
    <article className={styles.Contact}>
      <h2 className={styles.titre}>Nous contacter</h2>
      <div className={styles.areaOfText}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Formulaire envoyé !");
          }}
        >
          <select
            name="type"
            id="type"
            onChange={(e) => setAjout(e.target.value)}
          >
            <option value="exp">j'ajoute une ligne à mon expérience</option>
            <option value="sculpture">J'ajoute une création</option>
          </select>
          <div className={styles.centrer}>
            {ajout === "exp" ? (
              <div>
                <select
                  name="Catégorie"
                  id="catégorie"
                  onChange={(e) => setCategory(e.target.value)}
                  classname={styles.div}
                >
                  <option value="emploi">Emploi</option>
                  <option value="stage">Stage</option>
                  <option value="formation">Formation</option>
                  <option value="concours">Concours</option>
                  <option value="residence">residence</option>
                </select>

                <div classname={styles.div}>
                  <label htmlFor="details" classname={styles.div}>
                    Une petite description
                    <textarea
                      id="details"
                      name="details"
                      placeholder="details"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="city" classname={styles.div}>
                    Ville
                    <input
                      id="city"
                      name="city"
                      placeholder="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="organisation" classname={styles.div}>
                    organisation d'accueil
                    <input
                      id="organisation"
                      name="organisation"
                      placeholder="organisation"
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="date" classname={styles.div}>
                    Dates
                    <input
                      id="date"
                      name="date"
                      placeholder="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  title="Envoyer le message"
                  onClick={(event) => {
                    fetch("http://localhost:5000/exhibition/", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(postExhib),
                    })
                      .then((res) => res.json())
                      .then((res) => console.log(res));
                  }}
                >
                  Envoyer
                </button>
              </div>
            ) : (
              <div>
                <div classname={styles.div}>
                  <select
                    name="Catégorie"
                    id="catégorie"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="art">Art</option>
                    <option value="artisannat">Artisannat</option>
                  </select>
                  <div>
                    <label htmlFor="details" className={styles.div}>
                      Une petite description
                      <textarea
                        id="details"
                        name="details"
                        placeholder="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                      />
                    </label>
                  </div>
                  <div classname={styles.div}>
                    <label htmlFor="title" classname={styles.div}>
                      Nom
                      <input
                        id="title"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="date" className={styles.div}>
                      Dates
                      <input
                        id="date"
                        name="date"
                        placeholder="date"
                        value={create_date}
                        onChange={(e) => setCreate_date(e.target.value)}
                      />
                    </label>
                  </div>
                  <div classname={styles.div}>
                    <label htmlFor="thematic" className={styles.div}>
                      Thématique
                      <input
                        id="thematic"
                        name="thematic"
                        placeholder="thematic"
                        value={thematic}
                        onChange={(e) => setThematic(e.target.value)}
                      />
                    </label>
                  </div>
                  <div classname={styles.div}>
                    <label htmlFor="material" className={styles.div}>
                      Matériaux
                      <input
                        id="material"
                        name="material"
                        placeholder="material"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="price" className={styles.div}>
                      Prix
                      <input
                        id="price"
                        name="price"
                        placeholder="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </label>
                  </div>
                  <div classname={styles.div}>
                    <label htmlFor="image" className={styles.div}>
                      Url image
                      <input
                        id="image"
                        name="image"
                        placeholder="image"
                        value={pic_url}
                        onChange={(e) => setPic_url(e.target.value)}
                      />
                    </label>
                  </div>
                  <div classname={styles.div}>
                    <label htmlFor="exhibition" className={styles.div}>
                      Cet objet a t-il était exposé ?
                      <input
                        id="exhibition"
                        name="exhibition"
                        placeholder="exhibition"
                        value={exhibition}
                        onChange={(e) => setExhibition(e.target.value)}
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    title="Envoyer le message"
                    onClick={(event) => {
                      fetch("http://localhost:5000/sculpture/", {
                        method: "post",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(postSculpture),
                      })
                        .then((res) => res.json())
                        .then((res) => console.log(res));
                    }}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </article>
  );
}

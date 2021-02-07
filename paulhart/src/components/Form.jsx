import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [organisme, setOrganisme] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [ajout, setAjout] = useState(null);
  const [date, setDate] = useState("");
  const [thematic, setThematic] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [exhibition, setExhibition] = useState("");

  console.log(ajout);
  console.log(category);
  console.log(description);
  console.log(city);

  return (
    <article className={styles.Contact}>
      <h2>Nous contacter</h2>
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

          {ajout === "exp" ? (
            <div>
              <select
                name="Catégorie"
                id="catégorie"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="emploi">Emploi</option>
                <option value="stage">Stage</option>
                <option value="formation">Formation</option>
                <option value="concours">Concours</option>
                <option value="residence">Emploi</option>
              </select>

              <div>
                <label htmlFor="description">
                  Une petite description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="city">
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
                <label htmlFor="Organisme">
                  Organisme d'accueil
                  <input
                    id="organisme"
                    name="organisme"
                    placeholder="organisme"
                    value={organisme}
                    onChange={(e) => setOrganisme(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="date">
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
              <button type="submit" title="Envoyer le message">
                Envoyer
              </button>
            </div>
          ) : (
            <div>
              <div>
                <select
                  name="Catégorie"
                  id="catégorie"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="art">Art</option>
                  <option value="artisannat">Artisannat</option>
                </select>
                <div>
                  <label htmlFor="description">
                    Une petite description
                    <textarea
                      id="description"
                      name="description"
                      placeholder="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="name">
                    Nom
                    <input
                      id="name"
                      name="name"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="date">
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
                <div>
                  <label htmlFor="thematic">
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
                <div>
                  <label htmlFor="material">
                    Thématique
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
                  <label htmlFor="price">
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
                <div>
                  <label htmlFor="image">
                    Url image
                    <input
                      id="image"
                      name="image"
                      placeholder="image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="exhibition">
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

                <button type="submit" title="Envoyer le message">
                  Envoyer
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </article>
  );
}

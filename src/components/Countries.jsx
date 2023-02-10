import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/countries.scss";
import Filter from "./Filter";

import Search from "./Search";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const onSubmit = async (event) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${event}`);
    const data = await res.json();
    setCountries(data);
  };

  const onClick = async (event) => {
    const res = await fetch("https://restcountries.com/v3.1/region/" + event);
    const data = await res.json();
    setCountries(data);
  };

  const clickAll = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    getCountries();
  }, []);

  return (
    <>
      <section className="utilities">
        <Search onSubmit={onSubmit} />
        <Filter onClick={onClick} clickAll={clickAll} />
      </section>
      <ul className="countries">
        {countries.map((country) => (
          <Link to={country.name.common} key={country.name.common}>
            <li className="liste" key={country.name.common}>
              {" "}
              <div className="liste__box">
                <div className="liste__box__wrapper">
                  <img
                    className="liste__box__wrapper__img"
                    src={country.flags.svg}
                    alt="Flag's Country"
                  />
                </div>

                <div className="liste__box__description">
                  <h2 className="liste__box__description__title">
                    {country.name.common}
                  </h2>
                  <p className="liste__box__description__texte">
                    <span className="liste__box__description__texte--bolder">
                      Population :{" "}
                    </span>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p className="liste__box__description__texte">
                    <span className="liste__box__description__texte--bolder">
                      Region :{" "}
                    </span>{" "}
                    {country.continents}
                  </p>
                  <p className="liste__box__description__texte">
                    <span className="liste__box__description__texte--bolder">
                      Capital :{" "}
                    </span>{" "}
                    {country.capital}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

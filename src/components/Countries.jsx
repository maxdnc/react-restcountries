import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/countries.scss";
import Filter from "./Filter";
import Loading from "./Loading";
import Search from "./Search";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = async (event) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${event}`);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = async (event) => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/region/" + event);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickAll = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
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
        {isLoading && (
          <div>
            <Loading />
          </div>
        )}
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

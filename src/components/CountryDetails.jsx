import "../styles/countrydetails.scss";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import Loading from "./Loading";
import { useState } from "react";

export default function CountryDetails() {
  const country = useLoaderData();
  const navigate = useNavigate();

  const currencies = (x) =>
    Object.keys(x.currencies).map((e) => x.currencies[e].name);
  const symbolCurrencies = (x) =>
    Object.keys(x.currencies).map((e) => x.currencies[e].symbol);
  const languages = (x) => Object.keys(x.languages).map((e) => x.languages[e]);

  return (
    <div className="wrapper-country-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"> </i>
        Back
      </button>

      {country.map((item) => (
        <article key={item.population} className="country">
          <div className="country__wrapper-img">
            <img
              className="country__wrapper-img__flag"
              src={item.flags.svg}
              alt={item.flags.alt}
            />
          </div>

          <div className="country__description">
            <h2 className="country__description__title">{item.name.common}</h2>
            <div className="country__description__wrapper">
              <ul className="country__description__wrapper__first-details">
                <li>
                  <span className="bolder-text">Official Name :</span>{" "}
                  {item.name.official}
                </li>
                <li>
                  <span className="bolder-text">Population :</span>{" "}
                  {item.population.toLocaleString()}
                </li>
                <li>
                  <span className="bolder-text">Region :</span> {item.region}
                </li>
                <li>
                  <span className="bolder-text">Sub Region :</span>{" "}
                  {item.subregion}
                </li>
                <li>
                  <span className="bolder-text">Capital :</span>{" "}
                  {item.capital[0]}
                </li>
              </ul>
              <ul className="country__description__wrapper__second-details">
                <li>
                  <span className="bolder-text">Currencies :</span>{" "}
                  {currencies(item)} {symbolCurrencies(item)}
                </li>
                <li>
                  <span className="bolder-text">Languages :</span>{" "}
                  {languages(item).toLocaleString().replaceAll(",", " , ")}
                </li>
              </ul>
            </div>
            {item.borders && (
              <div className="country__borders">
                <h3 className="country__borders__title">
                  {" "}
                  Border Countries :{" "}
                </h3>
                <ul className="country__borders__liste">
                  {item.borders.map((border, index) => (
                    <li className="country__borders__liste__item" key={index}>
                      {border}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export const countryDetailsLoader = async ({ params }) => {
  const { name } = params;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const data = await res.json();
  if (!res.ok) {
    throw Error("We can't find the page you're looking for.");
  }
  return data;
};

import { useLoaderData, useNavigate } from "react-router";

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
        <article key={item.population} className="country-details">
          <div className="wrapper-details-flag">
            <img
              className="details-flag"
              src={item.flags.svg}
              alt={item.flags.alt}
            />
          </div>

          <div className="wrapper-description">
            <h2>{item.name.common}</h2>
            <div className="wrapper-listes">
              <ul className="first-part">
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
              <ul className="second-part">
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
              <div className="border-item">
                <h3> Border Countries : </h3>
                <ul className="third-part">
                  {item.borders.map((border, index) => (
                    <li className="borders" key={index}>
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

  const data = res.json();

  if (!res.ok) {
    throw Error("Could not find that country !");
  }

  return data;
};

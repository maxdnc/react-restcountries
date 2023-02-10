import "../styles/filter.scss";
import { useState } from "react";

export default function Filter({ onClick, clickAll }) {
  const [open, setOpen] = useState(false);

  const regions = [
    { name: "Europe" },
    { name: "Asia" },
    { name: "Africa" },
    { name: "Americas" },
    { name: "Oceania" },
  ];

  return (
    <div className="menu">
      <button
        onClick={() => setOpen(!open)}
        className={`menu__toggle ${open ? "active" : ""}`}
        aria-expanded={`${open ? "true" : "false"}`}
        aria-labelledby="drop down filter menu"
      >
        Filter
      </button>

      <ul className={`list ${open ? "active" : ""}`}>
        <li className="list__item" key="00">
          <button
            onClick={() => {
              clickAll();
              setOpen(!open);
            }}
            className="list__item__button"
          >
            All
          </button>
        </li>
        {regions.map((region, index) => (
          <li className="list__item" key={index}>
            <button
              className="list__item__button"
              onClick={() => {
                onClick(region.name);
                setOpen(!open);
              }}
            >
              {region.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

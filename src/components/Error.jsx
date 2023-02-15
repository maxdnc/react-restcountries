import "../styles/error.scss";

import { useRouteError, useNavigate } from "react-router";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <h2 className="error-page__title"> Something went wrong !</h2>
      <p className="error-page__texte"> {error.message}</p>
      <button
        className="error-page__button"
        onClick={() => navigate("/react-restcountries/")}
      >
        Back to home
      </button>
    </div>
  );
}

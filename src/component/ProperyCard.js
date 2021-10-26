import React from "react";
import imagePlaceholder from "../assets/logo.png";
import "../styles/PropertyCard.css";

function ProperyCard(props) {
  // eslint-disable-next-line react/prop-types
  const { title, location, email, price, bathrooms, bedrooms } = props;
  return (
    <>
      <div className="card col-4
       m-4" style={{ width: '18rem' }}>
        <img src={imagePlaceholder} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{location}</li>
          <li className="list-group-item">{bedrooms}</li>
          <li className="list-group-item">{bathrooms}</li>
          <li className="list-group-item">{price}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            {email}
          </a>
        </div>
      </div>
    </>
  );
  Name;
}

export default ProperyCard;

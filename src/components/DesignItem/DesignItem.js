import React from "react";
import "../DesignItem/DesignItem.css";

function DesignItem(props) {
  return (
    <div className="card">
      <img
        className="card-img-top imgSize"
        src={props.designItem.image}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.designItem.type}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default DesignItem;

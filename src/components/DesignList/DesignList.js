import React from "react";
import DesignItem from "../DesignItem/DesignItem.js";
import "./DesignList.css";
const counter = 0;
function DesignList(props) {
  console.log(props.designs);
  return (
    <>
      <div className="wrapper">
        {props.designs.map((designItem) => (
          <DesignItem
            key={designItem.id}
            designItem={designItem}
            counter={counter}
          />
        ))}
      </div>
    </>
  );
}

export default DesignList;

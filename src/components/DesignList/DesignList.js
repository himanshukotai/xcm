import React from "react";
import DesignItem from "../DesignItem/DesignItem.js";

const counter = 0;
function DesignList(props) {
  console.log(props.designs);
  return (
    <>
      {props.designs.map((designItem) => (
        <DesignItem
          key={designItem.id}
          designItem={designItem}
          counter={counter}
        />
      ))}
    </>
  );
}

export default DesignList;

// import axios from "axios";
import React, { useEffect, useState } from "react";
import DesignApi from "../../API/DesignAPI.js";
import DesignList from "../DesignList/DesignList.js";

function ShowcasePage() {
  // This data is only present for demo purposes. Usually you obtain this through the backend.

  //initialize empty array for todoitems  and settodoitems with backend
  const [designs, setDesigns] = useState([]);
  const getAllDesigns = () => {
    DesignApi.getDesigns()
      .then((designs) => setDesigns(designs))
      .catch((error) => alert("Something is wrong"));
  };

  useEffect(() => {
    getAllDesigns();
  }, []);

  return (
    <div className="container-fluid">
      <div className="inner">
        <DesignList designs={designs} />
      </div>
    </div>
  );
}

export default ShowcasePage;

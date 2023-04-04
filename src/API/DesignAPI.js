import axios from "axios";

const BASE_URL = "http://localhost:8090/designs";
const DesignAPI = {
  getDesigns: () =>
    axios.get(BASE_URL).then((response) => response.data.designList),
};

export default DesignAPI;

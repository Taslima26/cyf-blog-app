import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3100/api" });
export default client;

// export const get = client.get;
// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:3001/api/v1/restaurants",
// });

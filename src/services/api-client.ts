import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "003a1ae3b7a44a34be9dab36a21f814e",
  },
});

import axios from "axios";

const url = "https://covid-19-greece.herokuapp.com/refugee-camps";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    return data["refugee-camps"];
  } catch (error) {
    return error;
  }
};
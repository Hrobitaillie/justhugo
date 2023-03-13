import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API_URL;
const token = import.meta.env.VITE_TOKEN;



const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    
}

export const getSocialMenu = async () => {
    const response = await axios.get(
      baseURL + "/menus/2?populate=*",
      {},
      config
    );
    return socialMediaFactory(response);
  };

  
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const client_id = "3MMYlehen0jgaGJduN10qlgVFMiu5qccmRzH-thfeH8";

export const fetchImage = async (searchValue, currentPage) => {
  const axiosOptions = {
    params: {
      client_id: client_id,
      query: searchValue,
      page: currentPage,
    }
  };
    const response = await axios.get('/search/photos', axiosOptions);
    // console.log(response.data);
    
  return response.data;
};
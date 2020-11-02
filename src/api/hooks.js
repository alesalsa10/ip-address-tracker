import axios from 'axios';

const key = 'at_iGWSgpgam5rupDXVj1iVUeQ1mlHwV';

export const getIPInfo = async () => {
  try {
    const response = await axios.get(`
        https://geo.ipify.org/api/v1?apiKey=${key}`);
    return response.data
  } catch (error) {
    console.log('error', error);
  }
};

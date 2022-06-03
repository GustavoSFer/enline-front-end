import axios from 'axios';

const baseURL = `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`;

const dataRequest = async (endpoint) => {
  const { data } = await axios.get((baseURL + endpoint));
  return data;
};

const uploadRequest = async (endpoint, body) => {
  await axios.post((baseURL + endpoint), body);
};

export {
  uploadRequest,
  dataRequest,
}
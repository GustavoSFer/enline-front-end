import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const dataRequest = async (endpoint) => {
  const { data } = await axios.get((baseURL + endpoint));
  return data;
};

const uploadRequest = async (endpoint, body) => {
  await axios.post((baseURL + endpoint), body);
};

const deleteFileRequest = async (endpoint, params) => {
  await axios.delete(`${baseURL}${endpoint}${params}`);
}

export {
  uploadRequest,
  dataRequest,
  deleteFileRequest,
}
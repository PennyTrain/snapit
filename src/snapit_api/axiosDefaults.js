import axios from "axios";

axios.defaults.baseURL ='https://snapit-api-608e97df4345.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();

// This code sets up Axios to communicate with
// an API hosted at a specific URL. It configures Axios
// to send requests with multipart/form-data content 
// type for POST requests, commonly used for file uploads. 
// Additionally, it enables Axios to send cookies along with 
// cross-origin requests for maintaining session state.
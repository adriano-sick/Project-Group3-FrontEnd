import axios from "axios";
import store from "./store";

const config = {
    headers: { Authorization: `Bearer ${store.state.token}` }
};

const bodyParameters = {
  "name": "Administrador",
  "email": "adm@adm.com"
};

Axios.post( 
  'https://group3-anima.herokuapp.com/Home/login',
  bodyParameters,
  config
).then(console.log).catch(console.log);

const services = axios.create({
 baseURL: "https://group3-anima.herokuapp.com/",
});

services.interceptors.request.use(
 (config) => {

   config.headers.Authorization = `Bearer ${store.state.token}`;
 
  return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);

export default services;

//https://group3-anima.herokuapp.com/Home/login
//post https://group3-anima.herokuapp.com/User
//get https://group3-anima.herokuapp.com/User
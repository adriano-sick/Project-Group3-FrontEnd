import axios from "axios";
import store from "./store";

const bodyParameters = {
    "email": "adm@adm.com",
        "password": "adm"
};

axios.post('https://group3-anima.herokuapp.com/Home/login', {
        body:bodyParameters
      })
      .then(response => {
        SET_TOKEN = response.data.token;
      })
      .then(console.log).catch(console.log)
      .catch(e => {
        this.errors.push(e)
      })

export default services;

//https://group3-anima.herokuapp.com/Home/login
//post https://group3-anima.herokuapp.com/User
//get https://group3-anima.herokuapp.com/User
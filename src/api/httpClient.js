import axios from "axios";

const httpclient = axios.create({
  baseURL: "http://localhost:5000",
});

export default httpclient;
//we can use interceptor if we have fullfledged api calls authentication authrization

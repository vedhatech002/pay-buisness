import { GET_TRANSACTIONS } from "./config";
import httpclient from "./httpClient";

export const AuthServices = {
  getTransactions: () =>
    httpclient.get(GET_TRANSACTIONS).then((response) => response.data),
};

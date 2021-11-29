import config from "./config.json";
import http from "./httpService";

export const registerUser = user => {
    return http.post(`${config.localapi}/registerUser`, JSON.stringify(user))
}
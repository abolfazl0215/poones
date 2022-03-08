import config from "./config.json";
import http from "./httpService";

export const loginEndUser = (user) => {
  return http.post(
    `${config.pounesapi}/register`,
    JSON.stringify(user),
  );
};

export const loginUser = (user) => {
  return http.post(`${config.pounesapi}/login`, JSON.stringify(user));
};

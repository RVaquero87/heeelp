import axios from "axios";

const authService = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
});

export const doSignup = async ({
  username,
  password,
  rol,
  name,
  lastname,
  dniPassport,
  birthYear,
  street,
  number,
  portal,
  stairs,
  floor,
  letter,
  postalCode,
  city,
  country,
  legalCheck
}) => {
  const res = await authService.post("/signup", {
    username,
    password,
    rol,
    name,
    lastname,
    dniPassport,
    birthYear,
    street,
    number,
    portal,
    stairs,
    floor,
    letter,
    postalCode,
    city,
    country,
    legalCheck
  });
  return res.data;
};

export const doLogin = async ({ username, password }) => {
  const res = await authService.post("/login", {
    username,
    password
  });
  return res.data;
};

export const doEdit = async ({
  name,
  lastname,
  dniPassport,
  birthYear,
  street,
  number,
  portal,
  stairs,
  floor,
  letter,
  postalCode,
  city,
  country
}) => {
  const res = await authService.post("/edit", {
    name,
    lastname,
    dniPassport,
    birthYear,
    street,
    number,
    portal,
    stairs,
    floor,
    letter,
    postalCode,
    city,
    country
  });
  return res.data;
};

export const doLogout = async () => {
  const res = await authService.post("/logout");
};

export const whoUser = async () => {
  const res = await authService.post("/whoami");
  return res.data;
};

export const uploadPhoto = async image => {
  const res = await authService.post("/upload", image);
  return res.data;
};

export const getListUsers = async () => {
  const data = await authService.post("/users-list");
  return data;
};

export const doUnsubscribe = async user => {
  console.log("Userid", user);
  const data = await authService.post("/users-delete", user);
  console.log("data", data);
  return data;
};

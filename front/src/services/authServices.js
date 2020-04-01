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

export const uploadPhoto = async ({ imageUrl }) => {
  console.log("hola", imageUrl);
  const data = await authService.post("/upload", imageUrl);
  console.log("respuesta", data);
  return data;
};

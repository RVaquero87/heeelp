import { serviceApi } from "../lib/commonFunctional";

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
  legalCheck,
}) => {
  const res = await serviceApi.post("/auth/signup", {
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
    legalCheck,
  });
  return res.data;
};

export const doLogin = async ({ username, password }) => {
  const res = await serviceApi.post("/auth/login", {
    username,
    password,
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
  country,
}) => {
  const res = await serviceApi.post("/auth/edit", {
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
  });
  return res.data;
};

export const doLogout = async () => {
  const res = await serviceApi.post("/auth/logout");
};

export const whoUser = async () => {
  const res = await serviceApi.post("/auth/whoami");
  return res.data;
};

export const uploadPhoto = async (image) => {
  const res = await serviceApi.post("/auth/upload", image);
  return res.data;
};

export const getListUsers = async () => {
  const res = await serviceApi.post("/auth/users-list");
  return res.data;
};

export const doUnsubscribe = async (user) => {
  const data = await serviceApi.post("/auth/users-delete", user);
  return data;
};

export const doEditUserAdmin = async (user) => {
  const res = await serviceApi.post("/auth/users-edit", user);
  return res.data;
};

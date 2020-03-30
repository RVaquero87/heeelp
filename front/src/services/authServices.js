import axios from "axios";

const authService = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
});

export const doSignup = async ({ username, password, campus, course }) => {
  const res = await authService.post("/signup", {
    username,
    password,
    campus,
    course
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

export const doEdit = async ({ username, campus, course }) => {
  const res = await authService.post("/edit", {
    username,
    campus,
    course
  });
};

export const doLogout = async () => {
  const res = await authService.post("/logout");
};

export const whoUser = async () => {
  const res = await authService.post("/whoami");
  console.log(res.data);
  return res.data;
};

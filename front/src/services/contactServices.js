import { serviceApi } from "../lib/commonFunctional";

export const sendMessageContact = async ({ username, title, message }) => {
  const res = await serviceApi.post("/contact/create", {
    username,
    title,
    message,
  });
  return res.data;
};

export const getAllMessageContact = async () => {
  const res = await serviceApi.post("/contact/alls");
  return res.data;
};

export const deleteMessageContact = async (value) => {
  const res = await serviceApi.post("/contact/delete", value);
  return res.data;
};

export const sendMessageEmail = async ({ to, subject, emailbody }) => {
  const res = await serviceApi.post("/contact/send", {
    to,
    subject,
    emailbody,
  });
  return res.data;
};

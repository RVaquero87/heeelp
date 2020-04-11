import axios from "axios";

const contactService = axios.create({
  baseURL: "http://localhost:3000/contact",
  withCredentials: true,
});

const sendEmail = axios.create({
  baseURL: "https://api.sendgrid.com/v3/mail/send",
  withCredentials: false,
});

export const sendMessageContact = async ({ username, title, message }) => {
  const res = await contactService.post("/create", {
    username,
    title,
    message,
  });
  return res.data;
};

export const getAllMessageContact = async () => {
  const res = await contactService.post("/alls");
  return res.data;
};

export const deleteMessageContact = async (value) => {
  const res = await contactService.post("/delete", value);
  return res.data;
};

export const sendMessageEmail = async ({ from, to, subject, emailbody }) => {
  const res = await contactService.post("/send", {
    from,
    to,
    subject,
    emailbody,
  });
  return res.data;
};

import axios from "axios";

const aidResquestService = axios.create({
  baseURL: "http://localhost:3000/aid-requests",
  withCredentials: true,
});

export const createAidResquest = async ({
  title,
  content,
  price,
  time,
  type,
}) => {
  const res = await aidResquestService.post("/create", {
    title,
    content,
    price,
    time,
    type,
  });
  return res;
};

export const editAidResquest = async ({ _id, title, content, price, time }) => {
  const res = await aidResquestService.post("/edit", {
    _id,
    title,
    content,
    price,
    time,
  });
  return res;
};

export const getAidResquestCreator = async () => {
  const res = await aidResquestService.post("/id-creator");
  return res.data;
};

export const getAidResquestHelper = async () => {
  const res = await aidResquestService.post("/id-helper");
  return res.data;
};

export const getAidResquest = async () => {
  const res = await aidResquestService.post("/alls");
  return res.data;
};

export const publicAidResquest = async ({ _id }) => {
  const res = await aidResquestService.post("/public", {
    _id,
  });
  return res;
};

export const takeOverAidResquest = async ({ _id }) => {
  const res = await aidResquestService.post("/add-helper", {
    _id,
  });
  return res;
};

export const stopTakeOverAidResquest = async ({ _id }) => {
  const res = await aidResquestService.post("/delete-helper", {
    _id,
  });
  return res;
};

export const duplicateAidResquest = async ({ _id, title, time }) => {
  const res = await aidResquestService.post("/duplicate", {
    _id,
    title,
    time,
  });
  return res;
};

export const cancelAidResquest = async ({ _id }) => {
  const res = await aidResquestService.post("/cancel", {
    _id,
  });
  return res;
};

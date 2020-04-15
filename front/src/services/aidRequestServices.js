import axios from "axios";

const aidRequestService = axios.create({
  baseURL: "http://localhost:3000/aid-requests",
  withCredentials: true,
});

export const createAidRequest = async ({
  title,
  content,
  price,
  time,
  type,
}) => {
  const res = await aidRequestService.post("/create", {
    title,
    content,
    price,
    time,
    type,
  });
  return res;
};

export const editAidRequest = async ({ _id, title, content, price, time }) => {
  const res = await aidRequestService.post("/edit", {
    _id,
    title,
    content,
    price,
    time,
  });
  return res;
};

export const getAidRequestCreator = async () => {
  const res = await aidRequestService.post("/id-creator");
  return res.data;
};

export const getAidRequestHelper = async () => {
  const res = await aidRequestService.post("/id-helper");
  return res.data;
};

export const getAidRequest = async () => {
  const res = await aidRequestService.post("/alls");
  return res.data;
};

export const getOneAidRequest = async (_id) => {
  const res = await aidRequestService.post("/id-one", {
    _id,
  });
  return res.data;
};

export const publicAidRequest = async (_id) => {
  const res = await aidRequestService.post("/public", {
    _id,
  });
  return res;
};

export const takeOverAidRequest = async (_id) => {
  const res = await aidRequestService.post("/add-helper", {
    _id,
  });
  return res;
};

export const stopTakeOverAidRequest = async (_id) => {
  const res = await aidRequestService.post("/delete-helper", {
    _id,
  });
  return res;
};

export const duplicateAidRequest = async ({ _id, title, time }) => {
  const res = await aidRequestService.post("/duplicate", {
    _id,
    title,
    time,
  });
  return res;
};

export const cancelAidRequest = async (_id) => {
  const res = await aidRequestService.post("/cancel", {
    _id,
  });
  return res;
};

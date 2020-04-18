import { serviceApi } from "../lib/commonFunctional";

export const createAidRequest = async ({
  title,
  content,
  price,
  time,
  type,
}) => {
  const res = await serviceApi.post("/aid-requests/create", {
    title,
    content,
    price,
    time,
    type,
  });
  return res.data;
};

export const editDataAidRequest = async ({
  _id,
  title,
  content,
  price,
  time,
}) => {
  const res = await serviceApi.post("/aid-requests/edit", {
    _id,
    title,
    content,
    price,
    time,
  });
  return res.data;
};

export const getAidRequestCreator = async () => {
  const res = await serviceApi.post("/aid-requests/id-creator");
  return res.data;
};

export const getAidRequestHelper = async () => {
  const res = await serviceApi.post("/aid-requests/id-helper");
  return res.data;
};

export const getAidRequest = async () => {
  const res = await serviceApi.post("/aid-requests/alls");
  return res.data;
};

export const getOneAidRequest = async (_id) => {
  const res = await serviceApi.post("/aid-requests/id-one", {
    _id,
  });
  return res.data;
};

export const getPublicAidRequest = async (_id) => {
  const res = await serviceApi.post("/aid-requests/public", {
    _id,
  });
  return res.data;
};

export const takeOverAidRequest = async (_id) => {
  const res = await serviceApi.post("/aid-requests/add-helper", {
    _id,
  });
  return res.data;
};

export const stopTakeOverAidRequest = async (_id) => {
  const res = await serviceApi.post("/aid-requests/delete-helper", {
    _id,
  });
  return res.data;
};

export const getDuplicateAidRequest = async (_id) => {
  const res = await serviceApi.post("/aid-requests/duplicate", {
    _id,
  });
  return res.data;
};

export const getCancelAidRequest = async (_id) => {
  const res = await serviceApi.post("/aid-requests/cancel", {
    _id,
  });
  return res.data;
};

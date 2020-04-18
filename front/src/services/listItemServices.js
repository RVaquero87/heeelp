import { serviceApi } from "../lib/commonFunctional";

export const createItemList = async ({
  aidRequestsId,
  name,
  description,
  quantity,
}) => {
  const res = await serviceApi.post("/list-items/create", {
    aidRequestsId,
    name,
    description,
    quantity,
  });
  return res.data;
};

export const editItemList = async ({ name, description, quantity, _id }) => {
  const res = await serviceApi.post("/list-items/edit", {
    name,
    description,
    quantity,
    _id,
  });
  return res.data;
};

export const deleteItemList = async ({ _id, aidRequestsId }) => {
  const res = await serviceApi.post("/list-items/delete", {
    _id,
    aidRequestsId,
  });
  return res.data;
};

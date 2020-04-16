import { serviceApi } from "../lib/commonFunctional";

export const createReview = async ({ title, message, stars }) => {
  const res = await serviceApi.post("/reviews/create", {
    title,
    message,
    stars,
  });
  return res.data;
};

export const getAllReviews = async () => {
  const res = await serviceApi.post("/reviews/alls");
  return res.data;
};

export const getIDReview = async (user) => {
  const res = await serviceApi.post("/reviews/alls", user);
  return res.data;
};

export const deleteReviews = async (value) => {
  const res = await serviceApi.post("/reviews/delete", value);
  return res.data;
};

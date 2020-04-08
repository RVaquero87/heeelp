import axios from "axios";

const reviewsService = axios.create({
  baseURL: "http://localhost:3000/reviews",
  withCredentials: true,
});

export const createReview = async ({ title, message, stars }) => {
  const res = await reviewsService.post("/create", {
    title,
    message,
    stars,
  });
  return res.data;
};

export const getAllReviews = async () => {
  const res = await reviewsService.post("/alls");
  return res.data;
};

export const getIDReview = async (user) => {
  const res = await reviewsService.post("/alls", user);
  return res.data;
};

export const deleteReviews = async (value) => {
  const res = await reviewsService.post("/delete", value);
  return res.data;
};

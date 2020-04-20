import { serviceApi } from "../lib/commonFunctional";

export const sendNotification = async ({
  message,
  aidRequestId,
  receptorUserId,
}) => {
  const res = await serviceApi.post("/notifications/create", {
    message,
    aidRequestId,
    receptorUserId,
  });
  return res.data;
};

export const changeStatusNotification = async () => {
  const res = await serviceApi.post("/notifications/change-status");
  return res.data;
};

export const getMyReceivedNotifications = async () => {
  const res = await serviceApi.post("/notifications/alls-receptor-id");
  return res.data;
};

export const deleteNotifications = async ({ id }) => {
  const res = await serviceApi.post("/notifications/delete", { _id });
  return res.data;
};

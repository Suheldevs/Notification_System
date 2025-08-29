import  notificationQueue  from "../utils/notificationQueue.js";

// Instead of directly sending notification, enqueue a job
export const createNotification = async (req, res) => {
  const { channel, payload } = req.body;

  try {
    // job add hoga queue me
    await notificationQueue.add("send-notification", {
      channel,   // "mobile" | "web" | "email" | "sms"
      payload,   // title, body, fcmToken, subscription etc
    }, {
      attempts: 3,  // retry max 3 times
      removeOnComplete: true,
      priority: channel === "mobile" ? 1 : 5  // lower = higher priority
    });

    res.json({ success: true, message: "Notification job queued" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

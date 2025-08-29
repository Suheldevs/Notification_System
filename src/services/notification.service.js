import admin from "firebase-admin";
import webpush from "web-push";

// ---- Firebase (Flutter App) ----
export const sendPushToMobile = async (fcmToken, title, body, data = {}) => {
  try {
    const message = {
      notification: {
        title,
        body,
      },
      data, // extra info for navigation
      token: fcmToken,
    };

    const response = await admin.messaging().send(message);
    console.log("✅ Mobile push sent:", response);
    return response;
  } catch (error) {
    console.error("❌ Mobile push error:", error);
    throw error;
  }
};


const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
};

webpush.setVapidDetails(
  "mailto:your-email@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

export const sendPushToWeb = async (subscription, title, body, data = {}) => {
  try {
    const payload = JSON.stringify({
      title,
      body,
      data,
    });

    const response = await webpush.sendNotification(subscription, payload);
    console.log("✅ Web push sent:", response);
    return response;
  } catch (error) {
    console.error("❌ Web push error:", error);
    throw error;
  }
};

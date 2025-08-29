import { Worker } from "bullmq";
import connection from "../config/redis.config.js";
import { sendPushToMobile, sendPushToWeb } from "../services/notification.service.js";

const worker = new Worker("notifications", async (job) => {
  const { channel, payload } = job.data;

  switch (channel) {
    case "mobile":
      return await sendPushToMobile(payload.fcmToken, payload.title, payload.body, payload.data);
    case "web":
      return await sendPushToWeb(payload.subscription, payload.title, payload.body, payload.data);
    case "email":
      // email service call
      break;
    case "sms":
      // sms service call
      break;
    default:
      throw new Error("Invalid channel");
  }
}, { connection });

worker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} failed:`, err.message);
});

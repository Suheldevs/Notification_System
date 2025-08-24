import { Queue } from "bullmq";
import connection from '../config/redis.config.js'

const notificationQueue = new Queue('notifications',{connection})

export default notificationQueue
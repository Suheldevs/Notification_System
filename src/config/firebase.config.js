import admin from 'firebase-admin'
import serviceAccount from 'process.env.FIREBASE_CREDENTIALS'

export const admin =  admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
})
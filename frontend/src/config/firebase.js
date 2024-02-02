import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGF2r0XrP4bWovYqKXmYw_9oeUBn5a02o",
  authDomain: "specmaster-3000.firebaseapp.com",
  projectId: "specmaster-3000",
  storageBucket: "specmaster-3000.appspot.com",
  messagingSenderId: "478784239187",
  appId: "1:478784239187:web:72c4b23b64faaffa8bb8a6",
  measurementId: "G-8BRW9GZJQB",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;

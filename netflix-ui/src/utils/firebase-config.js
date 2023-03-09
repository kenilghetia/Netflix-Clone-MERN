import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Enter config values here
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
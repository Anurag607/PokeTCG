import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerUserNFTs = async (user_addr, nfts) => {
  if (user_addr !== undefined && user_addr !== null) {
    await setDoc(doc(db, "users", user_addr), {
      user_addr: user_addr,
      nfts: nfts
    });
  }
}

const getUserNFTs = async (user_addr) => {
  let placeholder = {
    user_addr: user_addr,
    nfts: []
  }

  if (user_addr === undefined || user_addr === null) return placeholder;

  const docRef = doc(db, "users", user_addr);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return placeholder;
  }
}

export {
  auth,
  db,
  registerUserNFTs,
  getUserNFTs
};


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzklB-iC5RWanW5RdagdxBplJhQfWS9-c",
  authDomain: "to-let-dhaka-a3776.firebaseapp.com",
  projectId: "to-let-dhaka-a3776",
  storageBucket: "to-let-dhaka-a3776.firebasestorage.app",
  messagingSenderId: "997333327891",
  appId: "1:997333327891:web:335e1318573a9291015fe6",
  measurementId: "G-SH0G6SMS2L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
// const firebaseConfig = {
//   apiKey: "AIzaSyCRb0jyl-glVCw2QW4GWOQHIzVmFkbICpw",
//   authDomain: "doctors-portal-6d04a.firebaseapp.com",
//   projectId: "doctors-portal-6d04a",
//   storageBucket: "doctors-portal-6d04a.appspot.com",
//   messagingSenderId: "371646342847",
//   appId: "1:371646342847:web:949e0afd05465eb7f5080a",
// };
// export default firebaseConfig;
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
export default firebaseConfig;

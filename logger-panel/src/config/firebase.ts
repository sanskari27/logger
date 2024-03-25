// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'logger-274.firebaseapp.com',
	projectId: 'logger-274',
	storageBucket: 'logger-274.appspot.com',
	messagingSenderId: '1004781921642',
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: 'G-SZ5N1LLJTZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

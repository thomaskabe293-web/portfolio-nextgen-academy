importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAAaYOj5NPxfN_uxcNpeDRqgPDCS6OL2x4",
    authDomain: "nextgen-academy-79232.firebaseapp.com",
    projectId: "nextgen-academy-79232",
    storageBucket: "nextgen-academy-79232.firebasestorage.app",
    messagingSenderId: "229839766878",
    appId: "1:229839766878:web:bab2a51b4d90d0eae5bbcf"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo1.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});



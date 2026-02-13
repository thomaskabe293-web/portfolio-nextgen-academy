importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Itilize enfòmasyon ki nan JSON ou a
const firebaseConfig = {
    apiKey: "AIzaSyB8eTcR86WDOcBDKjEdEee7SscMq0J8yYg",
    authDomain: "nextgen-academy-79232.firebaseapp.com",
    projectId: "nextgen-academy-79232",
    storageBucket: "nextgen-academy-79232.firebasestorage.app",
    messagingSenderId: "229839766878",
    appId: "1:229839766878:android:85b8cd7018396cc3e5bbcf"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Sa ap jere mesaj lè aplikasyon an fèmen
messaging.onBackgroundMessage((payload) => {
  console.log('Mesaj resevwa nan background:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});



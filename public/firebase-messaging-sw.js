// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyC8D5ncJ7QAmSNv_yQoAaJXB9YzVSaPMs0",
  authDomain: "test-76350.firebaseapp.com",
  projectId: "test-76350",
  storageBucket: "test-76350.appspot.com",
  messagingSenderId: "816054216633",
  appId: "1:816054216633:web:b79464923d27331c523868",
  measurementId: "G-KPXRGH71NN",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
   

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

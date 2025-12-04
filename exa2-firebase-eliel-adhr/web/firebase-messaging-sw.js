importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: 'AIzaSyAjrUDyV-m7I_lVt7cOFZp4a7IdDRY5bNk',
    appId: '1:112122252348:web:2ade56f7f68e3f849f0739',
    messagingSenderId: '112122252348',
    projectId: 'actividad-notificaciones-c4b82',
    authDomain: 'actividad-notificaciones-c4b82.firebaseapp.com',
    storageBucket: 'actividad-notificaciones-c4b82.firebasestorage.app',
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});

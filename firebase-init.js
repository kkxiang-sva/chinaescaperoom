// Firebase project config + shared SDK handles, used by data.js and room.html.
// Uses the "compat" build so it works as a plain classic <script> alongside the
// rest of this site's non-module JS (no build step / bundler here).
// Loaded before data.js on every page.
(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyABQ05IwEZsFWEvAeC-oTPCtSj2XYxkdrg",
    authDomain: "china-escape-room.firebaseapp.com",
    projectId: "china-escape-room",
    storageBucket: "china-escape-room.firebasestorage.app",
    messagingSenderId: "482423379934",
    appId: "1:482423379934:web:fbc3bcde97e6ff22312f4f",
    measurementId: "G-E2Z7MMG8NY"
  };
  firebase.initializeApp(firebaseConfig);
  window.fsDB = firebase.firestore();
  window.fsStorage = firebase.storage();
  window.fsAuth = firebase.auth();
})();

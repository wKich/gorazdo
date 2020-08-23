const functions = require('firebase-functions');
const { userOnCreate } = require('./auth/userOnCreate');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.userOnCreate = functions
  .region('europe-west1')
  .auth.user()
  .onCreate(userOnCreate);

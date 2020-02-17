const fetch = require('node-fetch');
const response = require('./response.json');
var admin = require('firebase-admin');

var serviceAccount = require('../private/annapavelstudio-firebase-adminsdk-d7e3g-2fb4d2109f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://annapavelstudio.firebaseio.com',
});

const BEHANCE_API_KEY = 'ugCqRrCuAuHAD6gvDTmegYXLxO2lWVca';
const BEHANCE_USERNAME = 'gorazdo';

const projectsURL =
  'https://www.behance.net/v2/users/' +
  BEHANCE_USERNAME +
  '/projects?callback=?&api_key=' +
  BEHANCE_API_KEY +
  '&per_page=12';

const getFromBehance = async () => {
  const db = admin.firestore();

  const { FieldValue, Timestamp } = admin.firestore;
  // const response = await fetch(projectsURL);
  // const data = await response.json();

  const { projects, http_code } = response;

  const batch = db.batch();
  projects.forEach(project => {
    const {
      owners,
      colors,
      published_on,
      created_on,
      modified_on,
      conceived_on,
      ...restProject
    } = project;
    const projectDocRef = db.collection('projects').doc(String(project.id));
    batch.set(projectDocRef, {
      ...restProject,
      published_on: Timestamp.fromDate(new Date(published_on)),
      created_on: Timestamp.fromDate(new Date(created_on)),
      modified_on: Timestamp.fromDate(new Date(modified_on)),
      conceived_on: Timestamp.fromDate(new Date(conceived_on)),
    });
    owners.forEach(owner => {
      const ownerRef = projectDocRef.collection('owners').doc(String(owner.id));
      batch.set(ownerRef, {
        ...owner,
        created_on: Timestamp.fromDate(new Date(owner.created_on)),
      });
    });
  });
  try {
    await batch.commit();
  } catch (error) {
    console.error(error);
  }
};

getFromBehance();

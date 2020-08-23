// const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const fs = admin.firestore();

const { Timestamp, FieldValue } = admin.firestore;

const userOnCreate = async (userRecord) => {
  const { uid, metadata, customClaims, emailVerified } = userRecord;
  // userRecord.toJSON() doesn't work as expected
  // https://github.com/firebase/firebase-functions/issues/270
  const userData = JSON.parse(JSON.stringify(userRecord));
  const userRef = fs.collection('users').doc(uid);
  try {
    const { creationTime, lastSignInTime } = metadata.toJSON();
    const createdAt = Timestamp.fromDate(new Date(creationTime));
    const userDataToSave = {
      uid,
      photoURL: userData.providerData[0].photoURL || null,
      name: userData.providerData[0].name || null,
      createdAt,
      updatedAt: FieldValue.serverTimestamp(),
      lastSignInAt: Timestamp.fromDate(new Date(lastSignInTime)),
      emailVerified,
    };

    if (Object.keys(customClaims).length > 0) {
      // possibly it's always empty when onCreate has been triggered
      userDataToSave.customClaims = customClaims;
    }

    const batch = fs.batch();
    batch.set(userRef, userDataToSave);

    userData.providerData.forEach((pData) => {
      const providerDocRef = userRef
        .collection('providerData')
        .doc(pData.providerId);
      batch.set(providerDocRef, pData);
    });
    await batch.commit();
    return 'ok';
  } catch (error) {
    console.error('Error fetching user data:', error);
    return 'Error';
  }
};

exports.userOnCreate = userOnCreate;

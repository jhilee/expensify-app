//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('expenses').push({
//     description: 'ele',
//     note: 'may bill',
//     amount: 7000,
//     createdAt: moment(0).format("MMM Do YY")
// }
// );





// database.ref('notes/-Lmg-BNkFjrTW6qWYi-d').remove();
//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React'
//   });

// database.ref('notes').set(notes);
// database.ref('notes/12')

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

  //////
//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });


//   setTimeout(() => {
//       database.ref('age').set(45);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 10500);
/////////
//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log('Error fetching data', e);
//     });

//   database.ref().set({
//       name: 'Juhui Lee',
//       age: 23,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google' 
//       },
//       isSingle: false,
//       location: {
//           city: "Vancouver",
//           country: "Canada"
//       }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });
// // updates only at the root level. Not going to upate the nested ones
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   });

// database.ref().remove()
//     .then(() => {
//         console.log('data is removed');
//     }).catch(() => {
//         console.log('data is not saved :(')
//     });
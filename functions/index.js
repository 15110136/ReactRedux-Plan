const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notifi) => {
  return admin.firestore().collection('notifications').add(notifi)
    .then(doc => console.log('notifycation added', doc));
});

exports.projectCreate = functions.firestore.document('projects/{projectId}').onCreate(doc => {
  const project = doc.data();
  const notifi = {
    content: "Add new project",
    user: `${project.authorFirstName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notifi);
});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notifycation = {
          content: "Joined with us",
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notifycation);
      });
  });

exports.deleteProject=functions.firestore.document('projects/{projectId}').onDelete((snap,context)=>{
  const deletedValue=snap.data();
  return console.log(deletedValue);
})
const functions = require('firebase-functions');
const admin = require('firebase-admin'); //we need this to get to auth options with admin SDK
admin.initializeApp(functions.config().firebase)



exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello oooo!!!!");
});

const createNotification =(notification)=>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=>{console.log(`Notification added ${doc}`)})
};

exports.projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate(doc=>{
    const project = doc.data();
    const notification = {
        content:'Added new project',
        user:`${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
    }
    return createNotification(notification);
})

exports.userJoined = functions.auth.user()
.onCreate(user=>{
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc=>{
        const newUser = doc.data();
        const notification = {
            content: 'Joined workPlan members',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

    return createNotification(notification);
    })

})

exports.projectDeleted = functions.firestore
.document('projects/{projectId}')
.onDelete(doc=>{
    const project = doc.data();
    const notification = {
        content:'Project was destroyed',
        user:`${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
    }
    return createNotification(notification);
})





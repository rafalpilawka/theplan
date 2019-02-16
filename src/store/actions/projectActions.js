

// export const createProject = (project)=>{
//     return {
//         type: 'CREATE_PROJECT',
//         project
//     }
//     }
//REGULARRY


export const createProject = (project)=>{
    return (dispatch, getState, { getFirebase , getFirestore })=>{
//Make ASYNCH CALL
const firestore=getFirestore();
firestore.collection('projects').add({
    ...project,
    authorFirstName: 'net',
    authorLastName: 'Ninja',
    authisId: 12345,
    createAt: new Date()

}).then(()=>{
    dispatch({type: 'CREATE_PROJECT', project})
}).catch((err)=>{
    dispatch({type: 'CREATE_PROJECT ERROR', err})
})

    }
}
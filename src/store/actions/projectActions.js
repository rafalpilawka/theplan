

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

const profile = getState().firebase.profile;//getState- we using for getting state at this point
const authorUid = getState().firebase.auth.uid


firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorUid,
    createAt: new Date()

}).then(()=>{
    dispatch({type: 'CREATE_PROJECT', project})
}).catch((err)=>{
    dispatch({type: 'CREATE_PROJECT ERROR', err})
})

    }
}

export const deleteProject = (projectId)=>{

    return (dispatch, getState, { getFirebase , getFirestore })=>{
        
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).delete().then((res)=>
        {dispatch({type: 'DELETE_PROJECT' , res})}
        );
    }

}
export const signIn=(credentials)=>{
    return(dispatch, state, {getFirebase})=>{
        const firebase= getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCES'})}
            ).catch((err)=>{
            dispatch({type:'LOGIN_ERROR', err})})
        }

}

export const signOut=()=>{
    return(dispatch,state, {getFirebase})=>{
        const firebase= getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
        firebase.logout();

    }
}

export  const signUp=(newUser)=>{
    return(dispatch , getState , {getFirebase , getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        // console.log('inside signupaction')
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email ,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set(
            {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0]+newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((err)=>{dispatch({type:'SIGNUP_ERROR', err})
    })
    //    console.log('promised') 
    }


}


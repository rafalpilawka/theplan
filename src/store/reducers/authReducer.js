
const initState={
    authError: null
}


const authReducer =(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCES':
            console.log('login succes')
            return{
                ...state,
                authError: null,
            }

        case 'LOGIN_ERROR':
        console.log('login  error')
            return{
                ...state,
                authError: action.err.message
                // authError: action.err
            };

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return{
                ...state
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error', action.err);
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer
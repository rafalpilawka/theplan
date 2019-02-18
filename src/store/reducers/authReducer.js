
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
                authError: 'login failed'
            };

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return{
                ...state
            }
        default:
            return state
    }
    
}

export default authReducer
const initState={
projects: {}}


const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('createproject error' , action.err);
            return state;
        case 'DELETE_PROJECT':
            console.log('Project will be deleted', action.res)
            return state;
        default:
            return state
    }
}

export default projectReducer
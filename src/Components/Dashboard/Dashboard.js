import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../Project/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {

    

    render(){
        //console.log(this.props);
        const {projects , auth, notifications} =this.props;
        if (!auth.uid) return <Redirect to='/signin'/>
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList projects={ projects } />
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
}
    
}

const mapStateToProps=(state)=>
{   //console.log(state);
    return{
        projects: state.firestore.ordered.projects,
        
        //firestore.ordered-  data ordered from firestore by firestoreconnect
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         dispatch()
//     }
// }


export default compose(connect(mapStateToProps), firestoreConnect([
    {collection: 'projects' , orderBy:['createAt',  'desc']} ,
    ,{collection:'notifications', limit: 3, orderBy: ['time', 'desc']}// with adding collection as an argument for order
]))(Dashboard);
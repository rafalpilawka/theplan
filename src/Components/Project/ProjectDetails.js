import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect  }  from 'react-router-dom';
import moment from 'moment'
import { deleteProject } from '../../store/actions/projectActions'


function ProjectDetails(props) {


    const { project, auth } = props;
  

    if(!auth.uid)return <Redirect to="/sigin"/>
   
   
    const  deleteHandler=(id)=>{
      
      props.delete(id);
      props.history.push("/");

    }
    

  
    if (project){
      return(
        <div className="container section project-details center">
            <div className="card z-depth-0">
              <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{project.authorFirstName}{project.authorLastName}</div>
                    <div > {moment(project.createdAt).calendar()} </div>
              </div>
            </div>
            <button className="btn red center" onClick={()=>deleteHandler(props.match.params.id)}>Delete project</button>
        </div>)
    }else{
      return (
        <div className="container center"><p>Loading project...</p></div>
      )
    }
  
    
  
}

const mapStateToProps=(state, ownProps)=>{
//console.log(state)
  const id=ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project=projects ? projects[id]: null
  
  return {
    project: project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = ( dispatch )=>{
  
  return{
      delete: (projectId)=>dispatch(deleteProject(projectId))
  }
  
  }

export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
  {collection : 'projects'}
]))(ProjectDetails)

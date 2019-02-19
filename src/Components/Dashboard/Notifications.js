import React from 'react';
import moment from 'moment';

const Notifications =(props)=>{

    const {notifications} = props;
    return(
        <div>
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-tittle">Notifications</span>
                        <ul className="notifications">
                           {notifications && notifications.map(item=>{
                                return (
                                    <li key={item.id}>
                                    <span className="red-text">{item.user} </span>
                                    <span className="grey-text">{item.content}</span>
                                        <div className="grey-text note-date"> 
                                        {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                )
                           })} 
                        </ul>
                    </div>
                </div>
            </div>
            {/* <p>Notifications</p> */}
        </div>
    )

}

export default Notifications;
import React from 'react';
import {useSelector} from 'react-redux';

function UserDetails(props) {
    const stateUsers = useSelector(state => state);

    let user = stateUsers.filter( (usr) => {
        return usr.id == props.displayUserId;
    });

    return (
        <>
            {user[0] && 
            <div className="centered">
                <section className="cards">
                    <article className="card">
                        <h1>{user[0] && user[0].name}</h1>
                        <p>Email: {user[0] && user[0].email}</p>
                        <p>Gender: {user[0] && user[0].gender}</p>
                        <p>Mob No: {user[0] && user[0].mobileno}</p>
                        <p>Nationality: {user[0] && user[0].nationality}</p>
                    </article>        
                </section>
            </div>}
        </>
    )
}

export default UserDetails;
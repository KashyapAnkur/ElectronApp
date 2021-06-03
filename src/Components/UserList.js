import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DisplayUser} from '../actions/UserActions';
import SearchBar from './SearchBar';

function UserList(props) {
    const stateUsers = useSelector(state => state);
    const [users, setUsers] = useState(stateUsers);
    
    useEffect( () => {
        console.log(stateUsers);
        setUsers(stateUsers);
    },[stateUsers]);

    const [searchedUser, setsearchedUser] = useState('');

    const searchUser = (val) => {
        setsearchedUser(val);
    }

    const filteredUsers = users.filter( user => {
        return user.name.toLowerCase().includes(searchedUser.toLowerCase())
    });

    return (
        <div className="search-container">
            <button className="deleteuser" onClick={props.deleteUser}>Delete</button>
            <div className="searchbar">
                <SearchBar searchUser={searchUser}/>
            </div>
            
            <div className="list">
                <ul>
                    {filteredUsers.map( (val,index) => {
                        return (
                            <li key={index} className={`users ${val.isSelected == "true" ? 'highlightColor' : ''}`} id={`id${val.id}`} onClick={() => props.displayUserDetails(val.id)}>{val.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UserList;
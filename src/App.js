import React,{useState} from 'react';
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';
import {useDispatch} from 'react-redux';
import {deleteuser, isSelected} from './actions/UserActions';
import './App.css';

function App() {

  const [displayUserId, setDisplayUserId] = useState();
  const dispatch = useDispatch();
  const displayUserDetails = (id) => {
    dispatch(isSelected(id));
    setDisplayUserId(id);
  }

  const deleteUser = () => {
    if(displayUserId) {
      let cnfrm = window.confirm("Are you sure you want to delete?","");
      if(cnfrm) {
        dispatch(deleteuser(displayUserId));
      }
      setDisplayUserId();
    } else {
      alert("Please select user to delete");
    }
  }

  return (
    <>
      <div className="container">
        <div className="users-list">
          <UserList displayUserDetails={displayUserDetails} deleteUser={deleteUser}/>
        </div>
        
        <div className="users-details">
          <UserDetails displayUserId={displayUserId}/>
        </div>
      </div>
    </>
  )
}

export default App;
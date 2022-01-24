
import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

//users me empty array rakhna pada kyunki wo fhir empty map (undfined) ko point karne lagta issliye
function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler = (uName,uAge) => {
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name : uName,age : uAge,id:Math.random().toString()}];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  );
};

export default App;

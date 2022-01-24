import React ,{ useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UserList from './UserList';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from './Helper/Wrapper';

const AddUser = (props) => {

  const [enteredUsername,setEnteredUsername]=useState('');
  const [enteredAge,setEnteredAge]=useState('');

  const [error,setError]=useState()


   const addUserHandler = (event) => {
   event.preventDefault();
   if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
   {
     setError({
       title: 'Invalid Input',
       message:'please enter a valid name and age(non-empty values).'
     });
     return ;
   }
   //enteredAge me + laga dega to string ko number me convert kar dega ,(as a string bhi chorenga to chal jayega lekin fhirbhi kar lena acha hai);
  if (+enteredAge<1) {
    setError({
    title: 'Invalid age',
    message:'please enter a valid age (>0).'
  });
   return ;
 };
   // console.log(enteredUsername,enteredAge);
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };
  
  const errorHandler = () =>{
   setError(null);
  };
  const usernameChangeHandler = (event) =>
  {
   setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) =>
  {
    setEnteredAge(event.target.value);
   };
  
  return (
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        type="text" 
        value={enteredUsername} 
        onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input 
        id="age" 
        type="number" 
        value={enteredAge} 
        onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
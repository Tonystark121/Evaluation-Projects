import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import Card from "./Card";
import Button from "./Button";

const Login = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPasswd, setPasswd] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswdIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLogIn,setLogIn] = useState(false);

  useEffect(()=>{
    console.log('checking form validity and related action')
    setTimeout(()=>{
      setFormIsValid(
        enteredEmail.includes('@') && enteredPasswd.trim().length > 6
      );
    },400);
  },[enteredEmail,enteredPasswd,setFormIsValid])

  const formSubmitHandler = (event) => {
    event.preventDefault();
       setEmail('');setPasswd('')
       console.log(enteredEmail,enteredPasswd)
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGHjk0eOAz93DsvgF4ayjHzX769GbLXPU',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPasswd,
                returnSecureToken:true,
            }),
            header:{
                'Content-type':'application.json'
            }

        }).then((res)=>{
            if(res.ok){
                console.log('You are Logged IN');
                alert('Logged In SuccessFully ):-')
                setLogIn(true);
                
            }else{
                return res.json().then((data)=>{
                  setLogIn(false);
                  console.log(data.error.message)
                  alert(data.error.message);
                })
            }
        })
    props.onLogin(enteredEmail, enteredPasswd);
  };

  const setUserEmail = (event) => {
    setEmail(event.target.value);
    // setFormIsValid(
    //     enteredEmail.includes('@') && enteredPasswd.trim().length > 6
    //   );
  };

  const setUserPasswd = (event) => {
    setPasswd(event.target.value);
    // setFormIsValid(
    //     enteredPasswd.length > 6 && enteredEmail.includes('@')
    //   );
  };

  const validateEmail = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswd = () => {
    setPasswdIsValid(enteredPasswd.trim().length > 6);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={setUserEmail}
            onBlur={validateEmail}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPasswd}
            onChange={setUserPasswd}
            onBlur={validatePasswd}
          />
        </div>
        <div className={classes.action}>
          <Button type="Submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
     </Card>
  );
};

export default Login;

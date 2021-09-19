import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {auth } from "./firebase.js";
import  { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
function Login() {
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [opensignin, setopensignin] = useState(false);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
      return () => {
        unsubscribe();
      };
    }, [user, username]);
  
    function rand() {
      return Math.round(Math.random() * 20) - 10;
    }
  
    const useStyles = makeStyles((theme) => ({
      paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));
   
    const signIn = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch((error) => {
        alert(error.message);
      });
      setopensignin(false);
    };
    const signUp = (e) => {
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          authUser.user.updateProfile({
            displayName: username,
          });
        })
  
        .catch((error) => alert(error.message));
    };
  
    function getModalStyle() {
      const top = 50;
      const left = 50;
  
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const classes = useStyles();
    return (
      <div className='app'>
        <div className='app__header'>
          <img
            className='app__headerimage'
            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
            alt='instagram_header'
          />
          {user ? (
            <Button onClick={() => auth.signOut()}>Sign-out</Button>
          ) : (
            <div>
              <Button onClick={() => setopensignin(true)}>Sign-In</Button>
              <Button onClick={() => setOpen(true)}>Sign-up</Button>
            </div>
          )}
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img
              className='app__image'
              src='https://static.xx.fbcdn.net/rsrc.php/yM/r/ol4auRObwID.svg'
              alt='instagram-logo'
            />
  
            <form className='app__form'>
              <center>
                <Input
                  placeholder='Email'
                  type='text'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br></br>
  
                <Input
                  placeholder='Username'
                  type='text'
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <br></br>
                <Input
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <br></br>
                <Button onClick={signUp}>Sign-up</Button>
              </center>
            </form>
          </div>
        </Modal>
  
        <Modal open={opensignin} onClose={() => setopensignin(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img
              className='app__image'
              src="https://www.amazon.com/ref=nav_logo"
              alt='instagram-logo'
            />
  
            <form className='app__form'>
              <center>
                <Input
                  placeholder='Email'
                  type='text'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br></br>
  
                <br></br>
                <Input
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <br></br>
                <Button onClick={signIn}>Sign-in</Button>
              </center>
            </form>
          </div>
        </Modal>
        </div>
    )    
  
}

export default Login

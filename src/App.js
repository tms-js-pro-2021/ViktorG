import React, {useState,useEffect} from "react";
import "/public/App.css";
import fire from './fire';
import login from './login';
import hero from './hero';
import { cache } from "webpack";

const App = () => {
   const [user,setUser] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [emailError,setEmailError] = useState('');
   const [passwordError,setPasswordError] = useState('');
   const [hasAccount,setHesAccount] = useState('false');


   const clearInputs = () => {
       setEmail('');
       setPassword('');
   }

   const clearErrors = () => {
       setEmailError('');
       setPasswordError('');
   }


   const handleLogin = () => {
       clearErrors();
        fire 
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err => {
            switch (err.code){
                case "auth/invalid-email " :
                case "auth/user-disabled " :
                case "auth/user-not-found " :
                  setEmailError(err.message);
                  break;
                  case "auth/wrong-password":
                      setPasswordError(err.message);
                      break;
            }
        });
   };

   const handleSignup = () => {
       clearErrors();
    fire 
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
        switch (err.code){
            case "auth/email-already-in-use" :
            case "auth/invalid-email" :
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
        }
    });
   };

   const handleLogout = () => {
       fire.auth().signOut();
   };

   const authListener = () => {
       fire.auth().onAuthStateChanged(user => {
           if(user) {
               clearErrors();
               setUser(user);
            } else {
                   setUser("");
               }
           });
        };
   
         useEffect(() => {
             authListener();
         }, []);

    return (
        <div className="App">
            {user ?(
               <Hero handleLogout={handleLogout} /> 
            ):(
               <login
             email={email}
            setEmail={setEmail}
            password={setHesAccount}
            handleLogin={handlelogin} 
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setEmailError={setHesAccount}
            emailError={emailError}
            passwordError={passwordError}
                /> 
            )}
            
                
        </div>
    );


};

export default App;
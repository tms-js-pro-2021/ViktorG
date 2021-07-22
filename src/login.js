import { loadPartialConfigAsync } from '@babel/core';
import React from 'react';

const Login = (props) => {

    const {email,
        setEmail,
        password,
        handleLogin,
        handleSignup,
        hasAccount,
        setEmailError,
        emailError,
        passwordError } =props;

    return(
        <section className="login">
           <div className= "loginContainer">
               <label>Username</label>
               <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
               <p className="errorMsg">{emailError}</p>
               <label>password</label>
               <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
               <p className="errorMsg">{passwordError}</p>
               <div className="btnContainer">
                   {hasAccount ? (
                       <>
                        <button onClick={handleLogin} >sing in</button>
                        <p>Don't have a account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sing up</span></p>
                       </>
                   ) : (
                    <>
                    <button onClick={handleSignup}>Sing up</button>
                    <p>Have a account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sing in</span></p>
                   </>
                   )}
               </div>
           </div>
        </section>
    )
}

export default Login;
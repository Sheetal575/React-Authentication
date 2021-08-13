import React from "react";
import './login.css';

const Login =  (props) =>{
    const [email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount] = props;
    return(
        // <section className="login">
        //     <div className="loginContainer">
        //         <label >Username</label>
        //         <input type="text" required value = {email} onChange = {(e)=>setEmail(e.target.value)} />
        //        <label >Password</label>
        //        <input type="password" required value = {password} onChange = {(e)=>setPassword(e.target.value)} />
        //        <div className="btn-container">
        //             {
        //               hasAccount?(
        //                             <>
        //                                 <button onClick={handleLogin} className=" signIn__button ">Sign In</button>
        //                                 <p className="m-3">Don't Have Account ? 
        //                                     <span onClick={()=>{setHasAccount(!hasAccount)}}>Create New Account</span>
        //                                 </p>
                                        
        //                             </>
        //                         ):(
        //                             <>
        //                                     <button onClick={handleSignUp} className="createAccount__button">Create New Account</button>
        //                                     <p className="m-3">Already Have Account ? 
        //                                     <span onClick={()=>{setHasAccount(!hasAccount)}}>Sign In</span>
        //                                 </p>
        //                             </>
        //                         )
        //                     } 
        //        </div> 
        //     </div>
        // </section>
        <h1>hjk</h1>
    )
}

export default Login;

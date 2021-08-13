
import './App.css';
import React , {useState,useEffect} from "react";
import Login from './login/login'
import Home from './home/home'
import fire from './config/fire'
function App() {
  const [user,setUser] = useState('');
  const [password ,setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hasAccount,setHasAccount] = useState(false);
  
  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const handleLogin  = () =>{
      fire.auth().signInWithEmailAndPassword(email,password)
      .catch((err)=>{
        console.log(err);
        alert(err);
      })
  }

  const handleSignUp  = () =>{
    fire.auth().createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      console.log(err);
    })
  }

  const handleLogout = () =>{
    fire.auth().signOut();
  }

  const authListner = () =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        alert("You are Logged in Successfully")
        console.log(user.uid)
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListner();
  }, [])


  return (
    <div>
      {
      user? (
        <div>
          hello,{user.uid}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ):(
          <section className="login">
            <div className="loginContainer">
                <label >Email Address</label>
                <br />
                <input type="email" required value = {email} onChange = {(e)=>setEmail(e.target.value)} />
                <br />
                <br />
               <label >Password</label>
               <br />
               <input type="password" required value = {password} onChange = {(e)=>setPassword(e.target.value)} />
               <div className="btn-container">
                    {
                      hasAccount?(
                                    <>
                                        <button onClick={handleLogin} className=" signIn__button ">Sign In</button>
                                        <p className="m-3">Don't Have Account ? 
                                            <span onClick={()=>{setHasAccount(!hasAccount)}}>Create New Account</span>
                                        </p>
                                        
                                    </>
                                ):(
                                    <>
                                            <button onClick={handleSignUp} className="createAccount__button">Create New Account</button>
                                            <p className="m-3">Already Have Account ? 
                                            <span onClick={()=>{setHasAccount(!hasAccount)}}>Sign In</span>
                                        </p>
                                    </>
                                )
                            } 
               </div> 
            </div>
        </section>
      )
    }
    </div>
    
           
  );
}

export default App;

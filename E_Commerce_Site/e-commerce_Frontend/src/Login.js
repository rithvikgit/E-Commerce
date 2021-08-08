import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import axios1 from "./axios1";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')

                }
            })
            .catch(error => alert(error.message))

            axios1.post('/users',{
                email_id:email,
                password:password,
              });

            
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo" 
                    src='/amazonLogo1.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                   
                </form>

                <p>
                    By signing-in you agree to the OPR Stores Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login;

// import React, { useState } from "react";
// import "./Login.css";
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "firebase";

// function Login() {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = e => {
//     e.preventDefault();

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(auth => {
//         //redirect to home page
//         history.push("/");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   }

//   const register = e => {
//     e.preventDefault();
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         //create a user, login and redirect to homepage
//         history.push("/");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   }
//   //   const history = useHistory();
//   //   const [email, setEmail] = useState("");
//   //   const [password, setPassword] = useState("");
//   //   const signIn = (e) => {
//   //     e.preDefault();
//   //     auth.signInWithEmailAndPassword(email, password)
//   //         .then( auth => {
//   //             //redirect to home page
//   //             history.push("/")
//   //         })
//   //         .catch(err => {
//   //             alert(err.message)
//   //         })
//   //   };

//   //   const register = (e) => {
//   //     e.preDefault();
//   //     auth
//   //       .createUserWithEmailAndPassword(email, password)
//   //       .then((auth) => {
//   //         //create a user, login and redirect to homepage
//   //         history.push("/");
//   //       })
//   //       .catch((err) => {
//   //         alert(err.message);
//   //       });
//   //   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <img className="login__logo" src="/amazonLogo1.png" />
//       </Link>
//       <div className="login__container">
//         <h1>Sign-in</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             onClick={signIn}
//             className="login__signInButton"
//           >
//             Sign In
//           </button>
//           <p>
//             By signing in you agree to amazon condition of use and sale.Please
//             see our privacy notice, our cookies notice and our interest based ad
//             notice.
//           </p>
//           <button onClick={register} className="login__registerButton">
//             Create your amazon account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

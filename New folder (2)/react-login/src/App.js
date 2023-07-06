// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React,{useEffect, useState} from 'react'
import Login from './Components/Login';
import MainHeader from './Components/MainHeader';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import AuthContext from './Components/AuthContext';

const App = () => {
     const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const logInfo = {isLoggedIn}

    if(logInfo==1){
      setIsLoggedIn(true);
    }
  },[])
  

  const loginHandler = (isLogIn) => {
      setIsLoggedIn(isLogIn);
  }

  const logoutHandler = (isLogIn) => {
    setIsLoggedIn(isLogIn);
  };


  return (
    // <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    /* </React.Fragment> */
  )
}

export default App;
